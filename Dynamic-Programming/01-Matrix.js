/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let result = [];
  const M = mat.length;
  const N = mat[0].length;
  const output = Array(M)
    .fill()
    .map(() => Array(N).fill(0));
  const queue = [];

  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) queue.push([i, j]);
      else output[i][j] = -1;
    }
  }

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [row, col] = queue.shift();
      for (const [dx, dy] of directions) {
        const x = row + dx;
        const y = col + dy;

        if (x < 0 || x >= matrix.length) continue;
        if (y < 0 || y >= matrix[0].length) continue;
        if (matrix[x][y] === 0) continue;

        if (output[x][y] !== -1) continue;

        output[x][y] = output[row][col] + 1;
        queue.push([x, y]);
      }
    }
  }
};
