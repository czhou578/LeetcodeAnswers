/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  //we need a set to keep of all the visited nodes
  let visited = new Set();

  let num_of_province = 0;

  //iterate through the adjacency matrix of isConnected
  for (let i = 0; i < isConnected.length; i++) {
    //if the node is not visited yet
    if (!visited.has(i)) {
      //we increase the num of province by one
      num_of_province++;

      //we run a dfs to check all its neighbor, whether it has any connections or not
      DFS(i);
    }
  }

  return num_of_province;

  function DFS(node) {
    for (let i = 0; i < isConnected.length; i++) {
      if (isConnected[node][i] === 1 && !visited.has(i)) {
        visited.add(i);
        DFS(i);
      }
    }
  }
};

//run time o(n^2)
//space: O(n)
