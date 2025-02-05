function reverseKGroup(head, k) {
  if (!head || k === 1) return head; // 如果链表为空或 k = 1，直接返回原链表

  // 计算链表长度
  let length = 0;
  let node = head;
  while (node) {
    length++;
    node = node.next;
  }

  // 递归翻转 k 个节点
  let dummy = new ListNode(0); // 虚拟头节点
  dummy.next = head;
  let prevGroupEnd = dummy; // prevGroupEnd 记录上一组翻转后链表的尾部

  while (length >= k) {
    let groupStart = prevGroupEnd.next; // 当前组的起始节点
    let groupEnd = groupStart;
    // 找到当前组的结束节点
    for (let i = 1; i < k; i++) {
      groupEnd = groupEnd.next;
    }

    // 记录下一组的起始节点
    let nextGroupStart = groupEnd.next;

    // 翻转当前组
    let prev = nextGroupStart;
    let curr = groupStart;
    while (curr !== nextGroupStart) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    // 将翻转后的部分连接到链表中
    prevGroupEnd.next = prev;
    groupStart.next = nextGroupStart;

    // 更新 prevGroupEnd
    prevGroupEnd = groupStart;
    length -= k;
  }

  return dummy.next; // 返回新链表的头节点
}
