//左闭，又开sum[right]-sum[left]
class NumArray {
  nums: number[];
  pre: number[];
  constructor(nums: number[]) {
    this.nums = nums;
    let n = this.nums.length;
    this.pre = new Array(n + 1).fill(0);
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum = sum + this.nums[i];
      this.pre[i + 1] = sum;
    }
  }

  sumRange(left: number, right: number): number {
    // console.log(this.pre);
    return this.pre[right + 1] - this.pre[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
var param_1 = obj.sumRange(0, 2);
var param_2 = obj.sumRange(4, 5);
console.log(param_2);
