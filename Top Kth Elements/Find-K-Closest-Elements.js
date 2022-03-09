/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
  // if (arr.length == 1) return [arr[0]]

  // let result = []

  // if (x <= arr[0]) {
  //   for (let i = 0; i < k; i++) {
  //     result.push(arr[i])
  //   }

  //   return result

  // } else if (x >= arr[arr.length - 1]) {
  //   for (let i = arr.length - 1; i >= k; i--) {
  //     result.push(arr[i])
  //   }

  //   return result.sort((a, b) => a - b)  

  // } else { //if number is in middle
  //   let itemPosition = arr.indexOf(x) // first index position of x

  //   result.push(x)

  //   for (let i = 1; i < k; i++) {
  //     if (result.length === k) break

  //     if (i === 1) {

  //       if (arr[itemPosition - i]) {
  //         result.push(arr[itemPosition - i])
  //       }
  
  //       if (result.length === k) break
  
  //       if (arr[itemPosition + i]) {
  //         result.push(arr[itemPosition + i])
  //       }

  //     } else {
  //       let leftdistance = Infinity
  //       let rightDistance = Infinity

  //       if (arr[itemPosition - i]) {
  //         leftdistance = x - arr[itemPosition - i]
  //       }

  //       if (arr[itemPosition + i]) {
  //         rightDistance = arr[itemPosition + i] - x
  //       }

  //       if (leftdistance <= rightDistance) {
  //         result.push(arr[itemPosition - i])

  //       } else {
  //         result.push(arr[itemPosition + i])
  //       }
  //     }

  //   } 

  // }

  // return result.sort((a, b) => a - b) 

  let low = 0, hi = arr.length -k;
  while(low <hi) {
      let mid = Math.floor((low+hi)/2);
      // for subarray starting at mid with size k+1, we compare element of two ends to eliminate the loser
      if(x-arr[mid] > arr[mid+k]-x) {
          low = mid+1; // arr[mid] is the one further away from x, eliminate range[lo, mid]
      } else {
          hi = mid; // arr[mid+k] is the one further away, all [mid, hi] will have simiar situation, elimiate them
      }
  }
  return arr.slice(low, low+k);

};

let test = [1,2,3,4,5]

console.log(findClosestElements(test, 4, 3));