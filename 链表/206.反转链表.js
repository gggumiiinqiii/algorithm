/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ListNode = require("../测试用例/链表/linkList");
var reverseList = function (head) {
  if (!head) {
    return head;
  }
  console.log(head);
  let prev = null;
  let curr = head;
  let temp = null;
  while (curr) {
    temp = curr.next; //暂存当前节点的next
    curr.next = prev; //保存第一个节点
    prev = curr; //前移动
    curr = temp; //后移动
  }

  return prev;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// let node4 = new ListNode(4);

node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// let res = hasCycle(node1);
reverseList(node1);
