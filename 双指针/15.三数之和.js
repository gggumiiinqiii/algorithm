/**
 * 三数之和 (LeetCode 15)
 *
 * 给你一个整数数组 nums，判断是否存在三元组 [nums[i], nums[j], nums[k]]
 * 满足 i != j、i != k 且 j != k，同时 nums[i] + nums[j] + nums[k] == 0。
 * 返回所有和为 0 且不重复的三元组。
 *
 * 思路：
 *   1. 排序数组
 *   2. 固定第一个数 nums[i]，在剩余区间用双指针找两数之和 = -nums[i]
 *   3. 跳过重复值来避免结果重复
 *
 * 时间复杂度：O(n²) — 外层 O(n)，内层双指针 O(n)
 * 空间复杂度：O(1) — 不考虑结果数组
 */

var threeSum = function (nums) {
    const n = nums.length;
    const result = [];

    // 长度不足 3，直接返回空
    if (n < 3) return result;

    // 1. 排序，双指针的前提
    nums.sort((a, b) => a - b);

    // 2. 固定第一个数
    for (let i = 0; i < n - 2; i++) {
        // 最小的数已经大于 0，后面不可能凑出 0
        if (nums[i] > 0) break;

        // 跳过重复的第一个数，避免结果重复
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // 3. 双指针在 [i+1, n-1] 区间找两数之和 = -nums[i]
        let left = i + 1;
        let right = n - 1;
        const target = -nums[i];

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum < target) {
                left++; // 和太小，左指针右移
            } else if (sum > target) {
                right--; // 和太大，右指针左移
            } else {
                // 找到一个解
                result.push([nums[i], nums[left], nums[right]]);

                // 跳过重复的 left
                while (left < right && nums[left] === nums[left + 1]) left++;
                // 跳过重复的 right
                while (left < right && nums[right] === nums[right - 1]) right--;

                // 两指针同时移动，继续寻找
                left++;
                right--;
            }
        }
    }

    return result;
};

module.exports = threeSum;
