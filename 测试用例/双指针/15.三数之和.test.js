const threeSum = require('../../双指针/15.三数之和');

// 排序辅助函数，忽略顺序比较
function sortResult(arr) {
    return arr.map(triplet => triplet.slice().sort((a, b) => a - b))
              .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}

function test(name, nums, expected) {
    const result = threeSum(nums);
    const r = sortResult(result);
    const e = sortResult(expected);
    const pass = JSON.stringify(r) === JSON.stringify(e);
    console.log(pass ? '✓' : '✗', name);
    if (!pass) {
        console.log('  Got:', JSON.stringify(result));
        console.log('  Expected:', JSON.stringify(expected));
    }
}

test('标准用例', [-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]);
test('无结果', [0, 1, 1], []);
test('全零', [0, 0, 0], [[0, 0, 0]]);
test('大量重复', [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4], [
    [-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3], [-3, 1, 2],
    [-2, -1, 3], [-2, 0, 2], [-1, -1, 2], [-1, 0, 1]
]);
test('空数组', [], []);
test('长度不足3', [1, 2], []);
test('全正数', [1, 2, 3, 4], []);
test('全负数', [-4, -3, -2, -1], []);
