// O(log n)
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle = 0;

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    console.log(left, right, middle);
    if (nums[middle] == target) {
      return middle;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
}
search([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
