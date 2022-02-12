/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  // if (!root) return []

  // let result = []
  // let queue = [root]

  // while (queue.length > 0) {
  //   let length = queue.length

  //   for (let i = 0; i < length; i++) {
  //     let node = queue.shift()
  //     result.push(node.val)
  //     if (node.right) {
  //       queue.push(node.right)
  //     } else {
  //       break;
  //     }
  //   }
  // }

  // return result

  if (!root) return []

  let result = []
  let queue = [root]

  while(queue.length > 0) {
    let length = queue.length

    result.push(queue[queue.length - 1].val)

    while (length > 0) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      length--
    }
  }

  return result

};