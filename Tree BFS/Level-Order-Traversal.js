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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []

  let queue = []
  let result = []

  queue.push(root)

  while (queue.length > 0) {
    let level = []
    let length = queue.length //queue.length in the for loop will not update after each iteration, so has to be used as a variable

    for (let i = 0; i < length; i++) {
      let node = queue.shift() //push the first element into the level array
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    result.push(level)
  }

  return result


};

