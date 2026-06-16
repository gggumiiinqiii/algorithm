function buildArray(target: number[], n: number): string[] {
  //Pop Push
  let valid = 0;
  let ans: string[] = [];
  for (let i = 1; i <= n && valid < target.length; i++) {
    if (i == target[valid]) {
      ans.push("Push");
      valid++;
    } else {
      ans.push("Push");
      ans.push("Pop");
    }
  }
  return ans;
}
buildArray([1, 3], 3);
