function rotateRight(head, k) {
  if (!head || k === 0) return head; // 如果链表为空或者 k 为 0，直接返回

  // 1. 计算链表长度
  let length = 1;
  let tail = head;
  while (tail.next !== null) {
    tail = tail.next;
    length++;
  }

  // 2. 计算实际需要旋转的步数
  k = k % length; // 如果 k 大于链表长度，取余得到实际旋转步数
  if (k === 0) return head; // 如果不需要旋转，直接返回链表

  // 3. 形成环形链表
  tail.next = head;

  // 4. 找到新的尾节点和新的头节点
  let newTail = head;
  for (let i = 1; i < length - k; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next; // 新的头节点
  newTail.next = null; // 断开环，形成新的链表

  return newHead;
}
