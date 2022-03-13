/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {

  let distanceIndexPairs = []
  let results = []

  if (points.length == 1) {
    results.push(points[0])
    return results
  }

  for (let i = 0; i < points.length; i++) {
    let point1 = points[i]

    let distance = Math.sqrt(Math.pow(point1[0], 2) + Math.pow(point1[1], 2))
    distanceIndexPairs.push([i, distance])
  }

  distanceIndexPairs.sort((a, b) => a[1] - b[1])

  for (let j = 0; j < k; j++) {
    let point = distanceIndexPairs[j][0] //grab sorted point
    results.push(points[point])
  }

  return results

};

/**
 * did this on my own, store distance index pairs as array, then use the index stored
 * in the array in the original array to find the proper element
 */