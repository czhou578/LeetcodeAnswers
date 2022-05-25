/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
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