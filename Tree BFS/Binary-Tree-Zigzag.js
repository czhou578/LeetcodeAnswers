  // /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// var zigzagLevelOrder = function(root) {
//   if (root === null) return []
//   let queue = [root]
//   let result = []
//   let leftOrRight = false //false is left, true is right

//   while (queue.length > 0) {
//     let level = [];
//     let length = queue.length

//     for (let i = 0; i < length; i++) {
//       let node = queue.shift()
//       level.push(node.val)
//       if (node.right === null && node.left === null) {
//         continue
//       } else if (leftOrRight === false) {
//         if (node.right) queue.push(node.right)
//         if (node.left) queue.push(node.left)
//         leftOrRight = true
        
//       } else if (leftOrRight === true) {
//         if (node.left) queue.push(node.left)
//         if (node.right) queue.push(node.right)
//         leftOrRight = false
//       }
//     }
//     result.push(level)
//   }

//   return result
// };

function zigzagLevelOrder(root) {
  let result = [];
  go(root, 0, result);
  return result;
}

function go(node, level, result) {  // l means level
  if (!node) return;

  if (result[level] == null) { //if there is null node
    result.push([]);
  }

  if (level % 2 === 0) {
    result[level].push(node.val);
  } else {
    result[level].unshift(node.val);
  }

  go(node.left, level + 1, result);
  go(node.right, level + 1, result);
}