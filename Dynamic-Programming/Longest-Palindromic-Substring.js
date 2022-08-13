/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  let result = "";
  let resLen = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (r - l + 1 > resLen) {
        result = s.substring(left, right + 1);
        resLen = right - left + 1;
      }
      left -= 1;
      right += 1;
    }

    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (r - l + 1 > resLen) {
        result = s.substring(left, right + 1);
        resLen = right - left + 1;
      }

      left--;
      right++;
    }
  }

  return result;
};

/**
 * Time complexity: O(n^2)
 * space complexity: O(1)
 */
