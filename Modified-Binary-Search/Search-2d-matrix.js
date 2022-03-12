/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  let leftIndex = 0
  let rightIndex = matrix.length - 1

  while (leftIndex <= rightIndex) {
    let middle = Math.floor((leftIndex + rightIndex) / 2) //find middle index

    if (matrix[middle].some((element) => element === target)) { //if current subarray has element, return true
      return true
    }

    //if target is higher then the lowest in subarray, lower then the highest in subarray, but not actually
    //in the subarray, return false
    if (target > matrix[middle][0] && target < matrix[middle][matrix[middle].length - 1]) { 
      return false
    }

    if (target > matrix[middle][matrix[middle].length - 1]) { //if target is in an array that is higher index
      leftIndex = middle + 1

    } else if (target < matrix[middle][0]) { //if target is in an array that is in a lower index
      rightIndex = middle - 1
    }
  }

  return false
};

let test = [[1,3]]
console.log(searchMatrix(test, 2));