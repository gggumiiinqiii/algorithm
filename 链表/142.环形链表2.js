/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ListNode = require("../测试用例/链表/linkList");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let pos = null;
  const hasCycle = (head) => {
    let fast = head,
      slow = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
      if (fast) {
        fast = fast.next;
      }
      if (slow == fast) {
        //快慢指针相遇后，把一个指针放回表头，两者同时各走一步，再次相遇的的时候就是环的入口
        //x:链表头到环入口、y环入口到快慢指针相遇点，z相遇点到环入口，c环的长度，n圈速
        // x=(n-1)c+z
        pos = head;
        while (pos !== slow) {
          pos = pos.next;
          slow = slow.next;
        }
        return pos;
      }
    }
    return null;
  };
  return hasCycle(head);
};
let node1 = new ListNode(1);
let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// let node4 = new ListNode(4);

node1.next = node2;
node2.next = node1;
// node3.next = node2;
// node4.next = node2;
detectCycle(node1);
