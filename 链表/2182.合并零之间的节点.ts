/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { arrayToLinkList, ListNode } from "../测试用例/链表/arrayToLinkList";

function mergeNodes(head: ListNode | null): ListNode | null {
  if (head == null) return null;
  console.log(head);
  let dummy = new ListNode(0);
  let p = dummy;
  let count = 0;
  head = head.next;
  while (head) {
    count += head.val;
    if (head.val == 0) {
      p.next = new ListNode(count);
      p = p.next;
      count = 0;
    }
    head = head.next;
  }
  console.log(dummy.next);
  return dummy.next;
}
mergeNodes(arrayToLinkList([0, 3, 1, 0, 4, 5, 2, 0]));
