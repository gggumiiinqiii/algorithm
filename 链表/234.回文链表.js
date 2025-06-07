/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  console.log(head);
  const arr = [];
  while (head.val >= 0) {
    arr.push(head.val);
    head = head.next ? head.next : { val: -1, next: null };
  }
  let cloneArr = [...arr].reverse();
  console.log(arr);
  console.log(cloneArr);

  console.log(arr.every((item, index) => item === cloneArr[index]));
  return arr.every((item, index) => item === cloneArr[index]);
};
module.exports = isPalindrome;
