/**
 * @param {number[]} nums
 * @return {number}
 * 找出有几个0定义为count
 * 然后从nums.length-count开始遍历不是0就加1
 */
var minimumSwaps = function (nums) {
  const n = nums.length;
  let rn = 0;
  //计算有几个0
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] == 0) {
      rn++;
    }
  }
  let count = 0;
  for (let i = n - rn; i < n; i++) {
    if (nums[i] != 0) {
      count++;
    }
  }

  console.log(count);
  return count;
};
minimumSwaps([0, 1, 0, 3, 12]); //移动一次
