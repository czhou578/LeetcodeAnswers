/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
  let count = 0

  intervals.sort((a, b) => a[1] - b[1])  

  let start = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    if (start <= intervals[i][0]) {
      start = intervals[i][1]
    } else {
      count++
    }
    
  }

  return count
};


let test = [[1,100],[11,22],[1,11],[2,12]]

console.log(eraseOverlapIntervals(test));

/**
 * I was messing too much with the end point of one interval and the front of the next. Did I overthink it?
 * 
 * Space time complexity = O(1)
 * RunTime complexity: O(n) since we have one loop 
 */