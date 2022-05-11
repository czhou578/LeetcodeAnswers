/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  // if (matrix.length == 1) return matrix[0]

  // let result = []

  // for (const element of matrix[0]) {
  //   result.push(element) //first row pushed in
  // }
  
  // for (let i = 1; i < matrix.length; i++) {
  //   result.push(matrix[i][matrix[i].length - 1])
  // }

  // let lastRow = matrix[matrix.length - 1].reverse()

  // for (let j = 1; j < lastRow.length; j++) {
  //   result.push(lastRow[j])
  // }

  // if (matrix.length > 2) {
  //   for (let i = 0; i < matrix[1].length - 1; i++) {
  //     result.push(matrix[1][i])
  //   }
  // }


  // return result

  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1

  let result = []
  let size = matrix.length * matrix[0].length

  while (result.length < size) {
    
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[top][i])
    }
    top++

    for (let h = top; h <= bottom && result.length < size; h++) {
      result.push(matrix[h][right])
    }

    right--

    for (let j = right; j >= left && result.length < size; j--) {
      result.push(matrix[bottom][j])
    }

    bottom--
    
    for (let j = bottom; j >= top && result.length < size; j--) {
      result.push(matrix[j][left])
    }

    left++
  }

  return result

};

/**
 * Have restrictions on top left, right and bottom, and make sure that the result does not
 * exceed the number of squares.
 * 
 * Time complexity: O(n), since we are hitting every cell
 * Space complexity: O(n) since it depends on input. 
 */