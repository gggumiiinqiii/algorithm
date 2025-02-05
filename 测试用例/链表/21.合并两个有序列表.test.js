const ListNode = require("./linkList");
const mergeTwoLists = require("../../链表/21.合并两个有序列表");

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(4);

let node4 = new ListNode(1);
let node5 = new ListNode(3);
let node6 = new ListNode(4);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;

// let res = hasCycle(node1);
console.log(mergeTwoLists(node1, node4));
// 1,1,2,3,4,4
