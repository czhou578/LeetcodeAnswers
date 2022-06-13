/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
  const compareArray = new Array(s.length + 1).fill(false)
  
  compareArray[0] = true;

  for (let i = 0; i < compareArray.length; i++) {
    if (compareArray[i] == false) continue
    for (let j = i + 1; j < compareArray.length; j++) {
      if (wordDict.includes(s.slice(i, j))) {
        compareArray[j] = true;
      }
    }
  }

  return compareArray[compareArray.length - 1]
};

/**
 * new array of length + 1 since if there is one word, then it return true
 * draw out the solution
 * 
 * Time complexity: O(n^2)
 * Spae complexity: O(n)
 */