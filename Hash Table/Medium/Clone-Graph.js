/*
Second Solution

1.Consider every node as a graph.
2. For every node given, check if its clone exists in given hash table.
If so, return it from hash table.
Else, create a clone of given node. Iterate through given node's neighbours and clone each neighbor
and push it to cloned node's neighbors array.
3. Return cloned node.
*/
var cloneGraph = function (node, cloneMap = new Map()) {
  if (!node) {
    return null;
  }
  if (cloneMap.has(node)) {
    return cloneMap.get(node);
  }
  let cloneNode = new Node(node.val, []);
  cloneMap.set(node, cloneNode);
  for (let neighbor of node.neighbors) {
    cloneNode.neighbors.push(cloneGraph(neighbor, cloneMap));
  }
  return cloneNode;
  // T.C: O(V+E), we visit every vertex and every edge
  // S.C: O(V), cloneMap has a space complexity of O(V)
};
