/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
  let array = new Array(s.length + 1).fill(0)

  array[0] = 1;
  array[1] = s.charAt(0) === '0' ? 0 : 1

  for (let index = 2; index <= s.length; index++) {
    let oneDigit = parseInt(s.substring(index - 1, index))
    let twoDigits = parseInt(s.substring(index - 2, index))

    if (oneDigit >= 1) {
      array[index] += array[index - 1]
    }

    if(twoDigits >= 10 && twoDigits <= 26) {
      array[index] += array[index - 2]
    }
  }

  return array[s.length]
};

/**
 * Time: O(n)
 * Space: O(n)
 */