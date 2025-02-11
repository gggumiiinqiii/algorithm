/**
 * 贪心策略和二分查找
 * @param {*} nums
 * @returns
 */
function getSequence(nums) {
  let result = [],
    resultIndexArr = [],
    preIndexArr = [];
  for (let i = 0; i < nums.length; i++) {
    let last = result[result.length - 1],
      current = nums[i];
    if (current > last || last === undefined) {
      // 当前项大于最后一项
      result.push(nums[i]);
      resultIndexArr.push(i);
      //最后一项的索引存到resultIndexArr.length-1中了。
      //preIndexArr中要存入前一个resultIndexArr的值，所以是resultIndexArr.length-1-1
      preIndexArr.push(resultIndexArr[resultIndexArr.length - 2]);
    } else {
      // 当前项小于最后一项，二分查找+替换

      // 二分查找
      let start = 0,
        end = resultIndexArr.length - 1,
        middle;
      while (start < end) {
        middle = Math.floor((start + end) / 2);
        if (nums[resultIndexArr[middle]] > current) {
          end = middle;
        } else {
          start = middle + 1;
        }
      }
      // 替换
      if (current < nums[resultIndexArr[start]]) {
        result[start] = nums[i];
        resultIndexArr[start] = i;
        preIndexArr[i] = resultIndexArr[start - 1];
      }
    }
  }

  // 利用前驱节点重新计算result
  let i = resultIndexArr.length, //从后往前找
    correctIndex = resultIndexArr[i - 1]; // 最后一项的索引一定是正确的，所以初始值就设置为resultIndexArr的最后一项。
  while (i-- > 0) {
    // 根据前驱节点一个个向前查找
    resultIndexArr[i] = correctIndex;
    result[i] = nums[correctIndex];
    // 取preIndexArr中的正确索引，等下一轮的时候赋值给resultIndexArr对应位置。
    // 注意preIndexArr中存的是每次放牌后，前一个堆的正确索引。
    //所以需要在下一轮的时候赋值，并且preIndexArr的每一项的值是跟nums中每一张牌一一对应的。
    correctIndex = preIndexArr[correctIndex];
  }

  console.log("最长递增子序列：", result);
  console.log("最长递增子序列索引：", resultIndexArr);
}
getSequence([2, 3, 1, 5, 6, 8, 7, 9, 4]);
