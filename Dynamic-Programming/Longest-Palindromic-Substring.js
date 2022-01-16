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
  let max = [0, 1]

  for (let i = 0; i < s.length; i++) {
    let even = getDrome(i - 1, i, s)
    let odd = getDrome(i - 1, i + 1, s)

    let currentMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even

    max = max[1] - max[0] > currentMax[1] - currentMax[0] ? max : currentMax
  }

  return s.slice(max[0], max[1])
};