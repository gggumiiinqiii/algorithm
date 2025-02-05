/**
 * @param {c} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // Floyd 判圈算法
  // 快慢指针，快指针每次走两步，慢指针每次走一步
  // 为什么一定会碰到
  let fast = head,
    slow = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    }
    if (slow == fast) {
      return true;
    }
  }
  return false;
};
module.exports = hasCycle;
