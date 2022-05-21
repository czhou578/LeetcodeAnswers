/**
 * @param {matrix[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  //keep track of row and column index 
  //2 sets for specific indexes of rows, widths to turn to 0.

  //case 1: 0 is at the corner of matrix
  // case 2: 0 is in middle (can go 4 directions)

  let rowToBeZero = new Set()
  let columnToBeZero = new Set()

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowToBeZero.add(i)
        columnToBeZero.add(j)
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (rowToBeZero.has(i)) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0
      }
    } else {
      for (let j = 0; j < matrix[i].length; j++) {
        if (columnToBeZero.has(j)) {
          matrix[i][j] = 0
        }
      }      
    }
  }
}; 

/**
 * Time complexity: O(n^2)
 * space complexity: O(n)
 */