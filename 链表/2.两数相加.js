/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const ListNode = require("../测试用例/链表/linkList");
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0); // 哑节点，简化边界条件处理
  let current = dummyHead; // 用来构建结果链表
  let carry = 0; // 进位

  while (l1 !== null || l2 !== null || carry !== 0) {
    // 获取当前位的值
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;

    // 计算当前位的和及进位
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // 计算进位
    current.next = new ListNode(sum % 10); // 记录当前位
    console.log(sum);
    // 移动指针
    current = current.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  console.log(dummyHead);
  return dummyHead.next; // 返回哑节点的下一个节点，即结果链表的头
}

module.exports = addTwoNumbers;
