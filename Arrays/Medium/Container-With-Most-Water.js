/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
   console.log('colin');
  var arr = [height.length]

  for (let i = 0; i < height.length; i++) {
    arr.push({i: height[i]})
  }

  console.log(arr);

  var arrSorted = arr.sort(function(a, b) {
    return Object.keys(a) - Object.keys(b)
  })

  console.log(arrSorted);

};

const input = [1,8,6,2,5,4,8,3,7]
maxArea(input)
// console.log('Area is: ' + maxArea(input));

