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
  let queue = [];

  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) queue.push([i, j]);
      else output[i][j] = -1;
    }
  }

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        let moveX = x + dx;
        let moveY = y + dy;

        if (moveX < 0 || moveX >= M) continue;
        if (moveY < 0 || moveY >= N) continue;

        if (mat[moveX][moveY] === 0) continue;
        if (mat[moveX][moveY] === -1) continue;

        output[moveX][moveY] = output[x][y] + 1;
        queue.push([moveX][moveY]);
      }
    }
  }

  return result;
};
