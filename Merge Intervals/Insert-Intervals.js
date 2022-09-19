/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) { //push
      result.push(newInterval);

      while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
      }

      return result;
    } else if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }

  result.push(newInterval);

  return result;
};

let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];

console.log(insert(intervals, newInterval));

/**
 * Big Takeaway, not going to push in the next array when you add the new interval behind it. Also, adding the new interval
 * before the return, since otherwise we are not following problem.
 *
 * O(n) time complexity (only going through array in loop once)
 * O(n) space complexity since we could be adding all the elements in original array to the new result array
 */
