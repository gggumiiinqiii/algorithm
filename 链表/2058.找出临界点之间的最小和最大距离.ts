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
function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  //先找出临界点，严格大于左右，严格小于左右
  let p = head;
  let left = 0;
  let lingjiearrIndex = [];
  let count = 0;
  while (p?.next) {
    left = p.val;
    count++;
    p = p.next;
    let val = p?.val;
    if (val > left && val > (p?.next?.val || Infinity)) {
      lingjiearrIndex.push(count);
    } else if (val < left && val < (p?.next?.val || -Infinity)) {
      lingjiearrIndex.push(count);
    }
  }

  let linjL = lingjiearrIndex.length;
  if (lingjiearrIndex.length < 2) {
    return [-1, -1];
  } else {
    let max = lingjiearrIndex[linjL - 1] - lingjiearrIndex[0];
    let min = Infinity;
    for (let i = 1; i < linjL; i++) {
      min = Math.min(
        min,
        Math.abs(lingjiearrIndex[i] - lingjiearrIndex[i - 1]),
      );
    }
    return [min, max];
  }
}
// console.log(nodesBetweenCriticalPoints(arrayToLinkList([5, 3, 1, 2, 5, 1, 2])));
// console.log(
//   nodesBetweenCriticalPoints(arrayToLinkList([1, 3, 2, 2, 3, 2, 2, 2, 7])),
// );
console.log(
  nodesBetweenCriticalPoints(arrayToLinkList([6, 8, 4, 1, 9, 6, 6, 10, 6])),
);
