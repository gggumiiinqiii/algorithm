/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ListNode = require("../测试用例/链表/linkList");
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null;
  let pA = headA;
  let pB = headB;
  //   console.log(headA, headB);
  //同时遍历会在a+m+b b+m+a的时候找到相交节点
  while (pA !== pB) {
    // 如果走到链表尾了就跳到另一个链表头，否则继续走

    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
    console.log(22, pA, pB);
  }
  console.log(pA);
  return pA;
};
module.exports = getIntersectionNode;
