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
 var levelOrderBottom = function(root) {
  if (root === null) return []

  // let temp = []
  
  // temp.push([root.val])
  // const dfs = (node, level, array) => {
  //   if (!node) {
  //     return;
  //   }

  //   let rowLevelArray = []

  //   if (node.left) {
  //     rowLevelArray.push(node.left.val)
  //   }
    
  //   if (node.right) {
  //     rowLevelArray.push(node.right.val)
  //   }

  //   if (rowLevelArray.length !== 0) {
  //     array.push(rowLevelArray)
  //   }
    
  //   dfs(node.left, array)
  //   dfs(node.right, array)
  // }


  // dfs(root, 0, temp)

  // const result = temp.reverse()

  // return result

  const queue = [root]
  const result = []

  while(queue.length > 0) {
    let length = queue.length
    result.push(queue.map((node) => node.val))

    while(length--) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)

    }
  }

  return result.reverse()
};