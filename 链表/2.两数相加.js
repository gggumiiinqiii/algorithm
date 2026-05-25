/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const ListNode = require("../测试用例/链表/linkList");
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  //一个虚拟头节点，如果没有虚拟头节点就需要判断，当前节点是不是头节点
  let dummy = new ListNode(0);
  let p = dummy;
  let c = 0;
  while (l1 && l2) {
    c += l1.val + l2.val;
    p.next = new ListNode(c % 10);
    c = Math.floor(c / 10);
    p = p.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    c += l1.val;
    p.next = new ListNode(c % 10);
    c = Math.floor(c / 10);
    p = p.next;
    l1 = l1.next;
  }
  while (l2) {
    c += l2.val;
    p.next = new ListNode(c % 10);
    c = Math.floor(c / 10);
    p = p.next;
    l2 = l2.next;
  }
  if (c) {
    p.next = new ListNode(c);
  }
  console.log(dummy.next);
  return dummy.next;
}

module.exports = addTwoNumbers;
