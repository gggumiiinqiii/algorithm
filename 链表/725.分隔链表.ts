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

function splitListToParts(
  head: ListNode | null,
  k: number,
): Array<ListNode | null> {
  // 1. 计算链表总长度
  let n = 0;
  let cur = head;
  while (cur !== null) {
    n++;
    cur = cur.next;
  }

  // 2. 计算每部分的基本长度和需要额外加 1 的部分数
  const base = Math.floor(n / k); // 每部分最少分几个
  let extra = n % k; // 前 extra 部分各多分 1 个

  // 3. 切割链表
  const result: Array<ListNode | null> = [];
  cur = head;

  for (let i = 0; i < k; i++) {
    result.push(cur); // 当前部分的头节点

    // 本部分的长度：前 extra 部分多一个节点
    const partSize = base + (extra > 0 ? 1 : 0);
    if (extra > 0) extra--;

    // 走到本部分的最后一个节点，然后切断
    for (let j = 0; j < partSize - 1; j++) {
      if (cur !== null) {
        cur = cur.next;
      }
    }

    // 切断：断开本部分与下一部分的连接
    if (cur !== null) {
      const next = cur.next;
      cur.next = null;
      cur = next;
    }
  }

  return result;
}
console.log(splitListToParts(arrayToLinkList([1, 2, 3]), 5));
