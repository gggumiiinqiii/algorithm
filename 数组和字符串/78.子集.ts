function subsets(nums: number[]): number[][] {
  const results: number[][] = [];
  const path: number[] = [];
  //一定是剪枝和回溯 一颗决策树，树的每个叶子节点都是一个子集
  let n = nums.length;
  function backTrack(start: number) {
    results.push([...path]);
    for (let i = start; i < n; i++) {
      path.push(nums[i]);
      backTrack(i + 1);
      path.pop();
    }
  }
  backTrack(0);
  return results;
}

console.log(subsets([1, 2, 3]));
