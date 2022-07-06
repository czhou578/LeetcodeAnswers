/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let height = heights.length; //first column
  let width = heights[0].length; //first row

  let pacific = new Set();
  let atlantic = new Set();

  const dfs = (row, col, visit, prevHeight) => {
    if (
      [row, col] in visit ||
      row < 0 ||
      col < 0 ||
      row === height ||
      col === width ||
      heights[row][col] < prevHeight
    ) {
      return;
    }

    visit.add((row, col));
    dfs(row + 1, col, visit, heights[row][col]);
    dfs(row - 1, col, visit, heights[row][col]);
    dfs(row, col + 1, visit, heights[row][col]);
    dfs(row, col - 1, visit, heights[row][col]);
  };

  for (let c = 0; c < height; c++) {
    dfs(0, c, pacific, heights[0][c]);
    dfs(height - 1, c, atlantic, heights[height - 1][c]);
  }

  for (let r = 0; r < width; r++) {
    dfs(r, 0, pacific, heights[r][0]);
    dfs(r, width - 1, atlantic, heights[r][width - 1]);
  }

  let result = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if ((i, j) in pacific && (i, j) in atlantic) {
        result.push((i, j));
      }
    }
  }

  return result;
};

/**
  Time: O(n * m)
  space: O(N)
*/
