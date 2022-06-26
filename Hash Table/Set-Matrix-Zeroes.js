/**
 * @param {matrix[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeroesA = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) zeroesA.push([r, c]);
    }
  }

  for (const entry of zeroesA) {
    let row = entry[0];
    let col = entry[1];

    helper(row, col, matrix);
  }
};

const helper = (row, col, matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }

  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
};

/**
 * Time complexity: O(n^2)
 * space complexity: O(n)
 */
