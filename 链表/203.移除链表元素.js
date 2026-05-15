function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var removeElements = function (head, val) {
  // 1. 创建虚拟头节点，指向原头节点
  const dummy = new ListNode(0, head);
  let cur = dummy; // 用 cur 遍历

  // 2. 遍历链表
  while (cur.next !== null) {
    if (cur.next.val === val) {
      // 找到目标，删除 cur.next
      cur.next = cur.next.next;
    } else {
      // 不相等，继续往后走
      cur = cur.next;
    }
  }

  // 3. 返回新头（dummy.next 就是处理后的头）
  return dummy.next;
};
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(removeElements(node1, 1));
