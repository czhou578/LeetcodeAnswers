/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let area = 0;
  let i = 0
  let j = height.length - 1

  while (i < j) {
    const tempArea = (j - i) * Math.min(height[i], height[j])
    area = Math.max(area, tempArea)
    if (height[i] > height[j]) {
      j -= 1
    } else {
      i += 1
    }
  }

  return area

};
