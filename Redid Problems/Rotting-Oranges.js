/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return -1;

  let queue = [];
  let minutes = 0;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  let fresh = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        fresh++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  if (fresh == 0) return 0; //edge case of if all the oranges are rotten by default

  while (queue.length > 0) {
    let queueLen = queue.length;
    let rot = 0;

    for (let i = 0; i < queueLen; i++) {
      let [row, col] = queue.shift();
      if (grid[row][col] === 1) {
        rot++;
        grid[row][col] = 2;
      }
      for (const direction of directions) {
        let newRow = row + direction[0];
        let newCol = col + direction[1];

        if (
          newRow >= 0 &&
          newRow < grid.length &&
          newCol >= 0 &&
          newCol < grid[0].length &&
          grid[newRow][newCol] === 1
        ) {
          queue.push([newRow, newCol]);
        }
      }
    }

    if (rot > 0) {
      fresh -= rot;
      minutes++;
    }
  }
  return fresh === 0 ? minutes : -1;
};

/**
 * Time: O(n * m)
 * space: O(n * m)
 */
