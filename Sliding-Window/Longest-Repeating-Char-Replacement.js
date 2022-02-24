/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
  let replaceCount = k
  let longestSubstringLength = -Infinity;
  
  for (let i = 0; i < s.length - k; i++) {
    let firstPointer = i
    let firstPointerValue = s[i]
    let iteratorLength = 1; //length of longest substring in current iteration
    
    for (let j = firstPointer + 1; j < s.length; j++) {
      if (replaceCount < 0 && s[j] != firstPointerValue) break

      if (s[j] !== firstPointerValue) {
        iteratorLength++
        replaceCount--
      } else {
        iteratorLength++
      }
    }

    longestSubstringLength = Math.max(longestSubstringLength, iteratorLength)
  }

  return longestSubstringLength
};

let string1 = "ABBB"
let num = 3

console.log(characterReplacement(string1, num));