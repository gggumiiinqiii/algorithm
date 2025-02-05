/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
function copyRandomList(head) {
  if (!head) return null;

  // 第一步：在每个原始节点后插入一个复制节点
  let current = head;
  while (current) {
    let copy = new Node(current.val);
    copy.next = current.next;
    current.next = copy;
    current = copy.next; // 继续处理下一个原始节点
  }

  // 第二步：复制random指针
  current = head;
  while (current) {
    if (current.random) {
      current.next.random = current.random.next;
    }
    current = current.next.next; // 跳过复制节点，处理下一个原始节点
  }

  // 第三步：分离两个链表
  current = head;
  let newHead = head.next;
  let copyCurrent = newHead;

  while (current) {
    current.next = current.next.next; // 恢复原链表的next指针
    if (copyCurrent.next) {
      copyCurrent.next = copyCurrent.next.next; // 设置复制链表的next指针
      copyCurrent = copyCurrent.next;
    }
    current = current.next;
  }

  return newHead;
}

module.exports = copyRandomList;
