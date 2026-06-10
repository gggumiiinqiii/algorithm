/**
 * 
 * @param people 
 * @returns 
 * 先对输入数组排序，h升序，k降序
 * 从头循环遍历
 * 当前这个人就是剩下未安排的人中最矮的人，他的k值就代表他在剩余空位的索引值
 * 如果有多个人高度相同，要按照k值从大到小领取索引值
 示例：
[ 0, 1, 2, 3, 4, 5 ] [ 4, 4 ] 4
[ 0, 1, 2, 3, 5 ]    [ 5, 2 ] 2
[ 0, 1, 3, 5 ]       [ 5, 0 ] 0
[ 1, 3, 5 ]          [ 6, 1 ] 3
[ 1, 5 ]             [ 7, 1 ] 5
[ 1 ]                [ 7, 0 ] 1
[ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 4, 4 ], [ 7, 1 ] ]
 */
function reconstructQueue(people: number[][]): number[][] {
  let n = people.length;
  const queue: number[][] = Array.from({ length: n }, () => []);
  let indexArr = Array.from({ length: n }, (item, index) => index);
  //根据h升序，k降序
  people.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  //存储的索引
  let sorIndex: number[] = [];
  people.forEach((item) => {
    let index = indexArr[item[1]];
    sorIndex.push(index);
    indexArr.splice(item[1], 1);
  });

  people.forEach((item, index) => {
    queue[sorIndex[index]] = item;
  });

  return queue;
}
reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]);
