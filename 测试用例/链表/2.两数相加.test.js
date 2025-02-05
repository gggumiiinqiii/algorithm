const ListNode = require("./linkList");
const addTwoNumbers = require("../../链表/2.两数相加");
console.log(">>>>>>环形链表》》测试》》");
let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(3);

let node4 = new ListNode(5);
let node5 = new ListNode(6);
let node6 = new ListNode(4);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;

addTwoNumbers(node1, node4);
