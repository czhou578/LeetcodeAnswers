/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  matrix.reverse()

  for (let i = 0; i < matrix.length; i++) { //every subarray in matrix...
    for (let j = i; j < matrix[i].length; j++) {
      if (i === j) continue

      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
};

let test = [[1,2,3],[4,5,6],[7,8,9]]

console.log(rotate(test));

/**
 * reverse the first row, then apply symmetry
 */