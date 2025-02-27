const ListNode = require("../链表/linkList");

const sortList = require("../../分治/148.排序链表");

console.log(">>>>>>环形链表》》测试》》");
let node1 = new ListNode(4);
let node2 = new ListNode(2);
let node3 = new ListNode(1);
let node4 = new ListNode(3);
let node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node4.next = node5;
// node5.next = node6;
console.log(sortList(node1));
