/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, m, n) {
  if (!head || m === n) return head; // 如果链表为空或 m == n，不需要反转

  // 创建一个虚拟头节点，方便操作
  let dummy = new ListNode(0);
  dummy.next = head;

  // 1. 定位到第 m-1 个节点
  let pre = dummy;
  for (let i = 1; i < m; i++) {
    pre = pre.next;
  }

  // 2. 反转从 m 到 n 的部分
  let start = pre.next; // 第 m 个节点
  let then = start.next; // 第 m+1 个节点

  for (let i = 0; i < n - m; i++) {
    start.next = then.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
  }

  return dummy.next; // 返回头节点
}
