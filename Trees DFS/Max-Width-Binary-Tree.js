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
 * @return {number}
 */
 var widthOfBinaryTree = function(root) {
  let queue = []
  queue.push([root, 0])
  let maxWidth = 1;

  while (queue.length !== 0) {
    let leftIndex = queue[0][1]
    let rightIndex = queue[queue.length - 1][1]

    maxWidth = Math.max(maxWidth, rightIndex - leftIndex + 1)

    for (let i = 0; i < queue.length;) {
      let [current, index] = queue.unshift()

      if (current.left) {
        queue.push([current.left, 2 * index + 1])
      }

      if (current.right) {
        queue.push([current.right, 2 * index + 2])
      }
    }
  }

  return maxWidth
    
};

//   let queue = []
//   queue.push([root, 0])
//   let maxWidth = 1;

//   while (queue) {
//     let leftIndex = queue[0][1]
//     let rightIndex = queue[queue.length - 1][1]

//     maxWidth = Math.max(maxWidth, rightIndex - leftIndex + 1)

//     for (const element of queue) {
//       let {current, index} = queue.shift()
//       if (current.left) {
//         queue.push([curr.left, 2 * index + 1])
//       }

//       if (current.right) {
//         queue.push([curr.right, 2 * index + 2])
//       }
//     }
//   }

//   return maxWidth

//   // if (root == null) return 0
//   // let startingLevelTotal = 0;
//   // let startingIteration = 0 //keeps track of indexes of binary tree
//   // let startingWidthObj = 0 // 
//   // let levelArr = [0]
//   // return dfs(root, startingLevelTotal, startingIteration, startingWidthObj, levelArr) + 1
// };

// function dfs(node, currLevel, iteration, maxWidth, levelValueArr) {
//   if (node == null) return 0
  
//   // this essentially keeps track of the begnning values of each level
//   if (levelValueArr[currLevel] === undefined) levelValueArr.push(iteration)

//   // resets the iteration to 0 at the beginning of every level and increments depending on the amount of nodes that exist within each level
//   iteration = iteration - levelValueArr[currLevel]
  
//   let leftTraversal = dfs(node.left, currLevel+1, iteration*2 + 1, maxWidth, levelValueArr)
//   let rightTraversal = dfs(node.right, currLevel+1, (iteration*2)+2, maxWidth, levelValueArr)
  
//   // reupdates the maxWidth
//   maxWidth = Math.max(leftTraversal, rightTraversal, iteration)
//   // console.log(maxWidth, leftTraversal, rightTraversal, iteration)

//   return maxWidth
// }