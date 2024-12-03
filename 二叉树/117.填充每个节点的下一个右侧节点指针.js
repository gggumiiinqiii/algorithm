var connect = function (root) {
  if (!root) return root; // 如果树为空，则返回null

  let queue = [root];
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (i < size - 1) {
        node.next = queue[0];
      } else {
        node.next = null;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root; // 返回修改后的树
};
module.exports = connect;
