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
import { ListNode, arrayToLinkList } from "../测试用例/链表/arrayToLinkList";
function getDecimalValue(head: ListNode | null): number {
  let arr = [];
  let p = head;
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  //字符串2进制
  return Number.parseInt(arr.join(""), 2);
  arr.reverse();
  console.log(arr);
  let sum = arr.reduce((a, b, i) => a + b * 2 ** i);
  return sum;
}

console.log(getDecimalValue(arrayToLinkList([1, 0, 1])));
