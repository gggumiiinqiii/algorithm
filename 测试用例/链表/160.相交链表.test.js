const getIntersectionNode = require("../../链表/160.相交链表");
const ListNode = require("./linkList");
// 创建公共部分
const common = new ListNode(8);
common.next = new ListNode(10);

// 链表 A
const a1 = new ListNode(1);

a1.next = new ListNode(3);
a1.next.next.next = common;

// 链表 B
const b1 = new ListNode(2);

b1.next = common;

const a = new ListNode(1);
a.next = new ListNode(2);

const b = new ListNode(3);
b.next = new ListNode(4);
const intersection = getIntersectionNode(a1, b1);

console.log(
  intersection ? `相交节点值为: ${intersection.val}` : "没有相交节点"
);
