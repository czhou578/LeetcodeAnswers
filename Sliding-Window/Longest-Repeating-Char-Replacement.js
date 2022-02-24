/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
  // let replaceCount = k
  // let longestSubstringLength = -Infinity;
  
  // for (let i = 0; i < s.length - k; i++) {
  //   let firstPointer = i
  //   let firstPointerValue = s[i]
  //   let iteratorLength = 1; //length of longest substring in current iteration
    
  //   for (let j = firstPointer + 1; j < s.length; j++) {
  //     if (replaceCount < 0 && s[j] != firstPointerValue) break

  //     if (s[j] !== firstPointerValue) {
  //       iteratorLength++
  //       replaceCount--
  //     } else {
  //       iteratorLength++
  //     }
  //   }

  //   longestSubstringLength = Math.max(longestSubstringLength, iteratorLength)
  // }

  // return longestSubstringLength

  let mostFrequent = -Infinity
  let maximum = -Infinity
  let charArray = new Array(26).fill(0)
  let start = 0;

  for (let i = 0; i < s.length; i++) { //i will act as the furthest pointer ahead
    let index = s.charCodeAt(i) - 65
    charArray[index] += 1
    mostFrequent = Math.max(mostFrequent, charArray[index])
    let charsToModify = (i - start + 1) - mostFrequent

    if (charsToModify > k) {
      let index2 = s.charCodeAt(start) - 65
      charArray[index2] -= 1
      start++
    }

    maximum = Math.max(maximum, i - start + 1)

  }

  return maximum
};

let string1 = "ABBB"
let num = 3

console.log(characterReplacement(string1, num));