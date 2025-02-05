function deleteDuplicates(head) {
  // 创建一个虚拟头节点，方便处理头节点可能被删除的情况
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy; // prev 指向前一个不重复节点
  let current = head; // current 指向当前节点

  while (current !== null) {
    // 检查当前节点与下一个节点是否重复
    if (current.next !== null && current.val === current.next.val) {
      // 如果有重复，跳过所有重复的节点
      while (current.next !== null && current.val === current.next.val) {
        current = current.next;
      }
      // 跳过所有重复节点，prev.next 指向当前节点的下一个节点
      prev.next = current.next;
    } else {
      // 如果当前节点没有重复，则更新 prev
      prev = prev.next;
    }
    // 继续遍历下一个节点
    current = current.next;
  }

  return dummy.next; // 返回新的链表头节点
}
