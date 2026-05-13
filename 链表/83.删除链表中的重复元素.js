/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const ListNode = require("../测试用例/链表/linkList");
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;
  let pos = head;

  while (pos.next) {
    if (pos.val == pos.next.val) {
      //这里会修改head的数值
      pos.next = pos.next.next;
    } else {
      //这里不会有修改head的数值，pos被重新赋值
      pos = pos.next;
    }
  }
  return head;
  console.log(pos, head);
};
let node1 = new ListNode(1);
let node2 = new ListNode(1);
let node3 = new ListNode(2);
let node4 = new ListNode(3);
let node5 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
deleteDuplicates(node1);
