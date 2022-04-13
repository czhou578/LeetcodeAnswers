/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
  // if the obstacle is at the start or destination, then there is no way to move

  //



  let rowSize = obstacleGrid.length;
  let columnSize = obstacleGrid[0].length
  let tempGrid = Array.from(Array(rowSize), () => new Array(columnSize).fill(0))
  console.log(tempGrid)

  let obstacleAlreadyFound = false;
  
  for (let i = 0; i < rowSize; i++) {
    if (obstacleAlreadyFound || obstacleGrid[i][0] == 1) {
      obstacleAlreadyFound = true;
      tempGrid[i][0] = 0;
    } else {
      tempGrid[i][0] = 1;
    }
  }

  obstacleAlreadyFound = false;

  for (let j = 0; j < columnSize; j++) {
    if (obstacleAlreadyFound || obstacleGrid[0][j] == 1) {
      obstacleAlreadyFound = true;
      tempGrid[0][j] = 0
    } else {
      tempGrid[0][j] = 1
    }
  }

  for (let i = 1; i < rowSize; i++) {
    for (let j = 1; j < columnSize; j++) {
      if (obstacleGrid[i][j] === 1) {
        tempGrid[i][j] = 0
      } else {
        tempGrid[i][j] = tempGrid[i - 1][j] + tempGrid[i][j - 1]
      }
    }
  }

  return tempGrid[rowSize - 1][columnSize - 1]
};

let test = [[0,0]]
console.log(uniquePathsWithObstacles(test));

/**
 * Time complexity: O(n^2)
 * space complexity: O(n)
 */