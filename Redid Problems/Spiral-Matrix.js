/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  let result = [];
  let size = matrix.length * matrix[0].length;

  while (result.length < size) {
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let h = top; h <= bottom && result.length < size; h++) {
      result.push(matrix[h][right]);
    }

    right--;

    for (let j = right; j >= left && result.length < size; j--) {
      result.push(matrix[bottom][j]);
    }

    bottom--;

    for (let j = bottom; j >= top && result.length < size; j--) {
      result.push(matrix[j][left]);
    }

    left++;
  }

  return result;
};

/**
 * Have restrictions on top left, right and bottom, and make sure that the result does not
 * exceed the number of squares.
 *
 * Time complexity: O(n), since we are hitting every cell
 * Space complexity: O(n) since it depends on input.
 */
