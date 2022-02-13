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
 var averageOfLevels = function(root) {
  if (!root) return []
  
  let result = []
  let queue = []

  queue.push(root)

  while(queue.length > 0) {
    let length = queue.length
    let sum = 0

    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      sum += node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)

      // if (node.left && node.right) {
      //   result.push(sum / queue.length)
      //   queue.push(node.left)
      //   queue.push(node.right)
        
      // } else if (node.left && node.right === null) {
      //   sum += node.left.val
      //   result.push(sum / queue.length)
      //   queue.push(node.left)
        
      // } else if (node.right && node.left === null) {
      //   sum += node.right.val
      //   result.push(sum / queue.length)
      //   queue.push(node.right)
      // }
    }
    result.push((sum / length).toFixed(5))
  }

  return result

  // if (!root) return []

  // let result = []
  // let queue = []

  // queue.push(root)

  // while (queue.length > 0) {
  //   let numOfNodes = queue.length
  //   let sum = 0

  //   for (let i = 0; i < numOfNodes; i++) {
  //     let node = queue.shift()
  //     sum += node.val
      
  //     if (node.left) queue.push(node.left)
  //     if (node.right) queue.push(node.right)

  //   }

  //   result.push((sum / numOfNodes).toFixed(5))
  // }

  // return result


};