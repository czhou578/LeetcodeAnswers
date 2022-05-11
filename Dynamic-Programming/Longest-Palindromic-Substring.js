/**
 * @param {string} s
 * @return {string}
 */

const getDrome = (left, right, s) => {
  while(left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      break;
    }

    left--
    right++
  }

  return [left + 1, right]
}

var longestPalindrome = function(s) {
  // let max = [0, 1]

  // for (let i = 0; i < s.length; i++) {
  //   let even = getDrome(i - 1, i, s)
  //   let odd = getDrome(i - 1, i + 1, s)

  //   let currentMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even

  //   max = max[1] - max[0] > currentMax[1] - currentMax[0] ? max : currentMax
  // }

  // return s.slice(max[0], max[1])

  let result = ""
  let resLen = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i
    let right = i

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if ((r - l + 1) > resLen) {
        result = s.substring(left, right + 1)
        resLen = right - left + 1
      }
      left -= 1
      right += 1
    }

    left = i;
    right = i + 1

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if ((r - l + 1) > resLen) {
        result = s.substring(left, right + 1)
        resLen = right - left + 1
      }

      left--
      right++
    }
  }

  return result
};

/**
 * Time complexity: O(n^2)
 * space complexity: O(1)
 */