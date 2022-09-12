/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const start = image[sr][sc];

  const traverse = (x, y) => {
    if (x < 0 || x >= image.length) return;
    if (y < 0 || y >= image[x].length) return;

    if (image[x][y] !== start) return; //if you hit a value different from starting value, then don't change anything.
    if (image[x][y] === color) return; //if this square already has been changed color

    image[x][y] = color;

    directions.forEach(([dx, dy]) => {
      traverse(x + dx, y + dy);
    });
  };

  traverse(sr, sc);
  return image;
};
