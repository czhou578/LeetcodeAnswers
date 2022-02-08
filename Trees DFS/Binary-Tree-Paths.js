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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  // let resultArray = []
  // var string = ""
  
  // const dfs = (node) => {
  //   if (node === null) {
  //     resultArray.push(string)
  //     string = ""
  //     return
  //   }
  //   string += '->' + node.val

  //   dfs(node.left)
  //   dfs(node.right)

  // }

  // dfs(root)

  // return resultArray
  if (root === null) return []

  let resultArray = []

  const dfs = (node, string) => {
    string += node.val

    if (!node.left && !node.right) {
      resultArray.push(string)
    }

    if (node.left) {
      dfs(node.left, string + '->')
    }

    if (node.right) {
      dfs(node.right, string + '->')
    }

  }

  dfs(root, "")

  return resultArray
};

/**
 * Time and space complexity is O9n) since we are looking at each node in the tree.
 * 
 * I was adding to the string wrong. Also, the parameters are wrong. I should be passing in the
 * string since there is a charater being added every time a traversal occurs. 
 * You don't return from the recursive call since you are not going back up the tree.
 */