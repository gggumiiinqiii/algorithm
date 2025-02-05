const ListNode = require("./linkList");
const hasCycle = require("../../链表/环形链表");
console.log(">>>>>>环形链表》》测试》》");
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

// let res = hasCycle(node1);
hasCycle(node1);
