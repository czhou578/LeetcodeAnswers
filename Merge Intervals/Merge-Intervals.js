/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const result = [intervals[0]]

  for (const interval of intervals) {
    let e1 = result[result.length - 1][1]
    let s2 = interval[0]
    let e2 = interval[1]

    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2)
    } else {
      result.push(interval)
    }
  }

  return result
};

/**
 * I didn't know how to set 3 variables to track the different values. Also, consider the case of [1,10], [2,6], which turns into [1,10]
 * 
 * Run Time: O(n log n): log n for each row, multiplied by n number of rows
 * space time: O(n) since we have to create an array that depends on the size of the input array
 */