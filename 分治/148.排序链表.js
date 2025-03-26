/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const ListNode = require("../测试用例/链表/linkList");
var sortList = function (head) {
  // 边界条件：空链表或只有一个元素的链表无需排序
  if (!head || !head.next) {
    return head;
  }
  // 获取链表的中间节点
  function getMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  // 合并两个已排序的链表
  function merge(left, right) {
    let dummy = new ListNode(); // 虚拟头节点
    let current = dummy;

    // 合并两个链表，按顺序连接节点
    while (left && right) {
      if (left.val < right.val) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }

    // 如果某个链表还有剩余元素，直接接到结果链表
    if (left) {
      current.next = left;
    }
    if (right) {
      current.next = right;
    }

    return dummy.next;
  }

  // 1. 使用快慢指针找到链表的中间节点
  let mid = getMiddle(head);
  console.log("midd", mid);
  // 2. 将链表一分为二
  let left = head;
  let right = mid.next;
  mid.next = null; // 断开两部分

  // 3. 递归排序左右两部分
  left = sortList(left);
  right = sortList(right);

  // 4. 合并排序好的左右部分
  return merge(left, right);
};
module.exports = sortList;
