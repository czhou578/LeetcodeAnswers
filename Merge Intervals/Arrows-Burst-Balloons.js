/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
  points.sort((a, b) => a[1] - b[1])
  
  let result = 1;
  let end = points[0][1]

  for (const interval of points) {
    if (interval[0] > end) {
      end = interval[1]
      result++
    }
  }

  return result
};

/**
 * Time Complexity: O(n) --- WRONG: The sort is O(log n), but because of the for loop, the complexity would be O(nlogn)
 * Space Complexity: O(1)
 */