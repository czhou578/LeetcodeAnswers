/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) return 0;

  let leftPointer = 0;
  let rightPointer = 0;
  let maxSubstringLength = 0;
  let set = new Set();

  while (rightPointer < s.length) {
    if (!set.has(s.charAt(rightPointer))) {
      set.add(s.charAt(rightPointer))
      rightPointer++;
      maxSubstringLength = Math.max(maxSubstringLength, set.size)
    } else {
      set.delete(s.charAt(leftPointer));
      leftPointer++;
    }
  }

  return maxSubstringLength;

};

let test = "pwwkew"

console.log('result: ' + lengthOfLongestSubstring(test));