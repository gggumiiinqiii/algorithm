const ListNode = require("./linkList");

function arrayToLinkList(arr) {
  let dummy = new ListNode(0);
  //p是指针
  let p = dummy;
  for (let i = 0; i < arr.length; i++) {
    p.next = new ListNode(arr[i]);
    p = p.next;
  }
  //console.log(dummy.next);
  return dummy.next;
}
function arrayToLinkListRecursive(arr, index = 0) {
  if (arr.length === index) {
    return null;
  }
  let node = new ListNode(arr[index]);
  node.next = arrayToLinkListRecursive(arr, index + 1);
  return node;
}
arrayToLinkList([1, 2, 3, 4]);
//console.log(arrayToLinkListRecursive([1, 2, 3, 4]));
module.exports = { ListNode, arrayToLinkList };
