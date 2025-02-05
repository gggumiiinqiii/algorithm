/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const ListNode = require("../测试用例/链表/linkList");

var mergeTwoLists = function (list1, list2) {
  if (list1 && list2) {
    let node;
    if (list1.val > list2.val) {
      node = new ListNode(list2.val);
      node.next = mergeTwoLists(list1, list2.next);
    } else {
      node = new ListNode(list1.val);
      node.next = mergeTwoLists(list1.next, list2);
    }
    return node;
  }
  return list1 || list2;
};
module.exports = mergeTwoLists;
