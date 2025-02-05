function partition(head, x) {
  // 创建两个虚拟头节点
  let lessHead = new ListNode(0); // 存储小于 x 的节点
  let greaterHead = new ListNode(0); // 存储大于等于 x 的节点

  let less = lessHead;
  let greater = greaterHead;

  // 遍历链表
  while (head !== null) {
    if (head.val < x) {
      less.next = head; // 将小于 x 的节点链接到 less 链表
      less = less.next;
    } else {
      greater.next = head; // 将大于等于 x 的节点链接到 greater 链表
      greater = greater.next;
    }
    head = head.next;
  }

  // 合并两个链表，注意要将 greater 链表的尾节点指向 null，防止形成环
  greater.next = null;
  less.next = greaterHead.next; // 将 less 链表连接到 greater 链表的头部

  return lessHead.next; // 返回去掉虚拟头节点后的链表
}
