
/**
 * @param {string} s
 * @return {number}
 */

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left <= right) {
    if (string.charAt(left) !== string.charAt(right)) {
      return false
    }

    left++;
    right--
  }

  return true
}

var countSubstrings = function(s) {
  // let count = s.length; // each element countes once

  // for (let i = 2; i <= s.length; i++) {
  //   for (let j = 0; j + i <= s.length; j++) { //if i ==
  //     console.log(j + i);
  //     if (isPalindrome(s.slice(j, j + i))) {
  //       count++
  //     }
  //   }
  // }

  // return count;

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let right = i
    let left = i

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      result++
      left -= 1
      right += 1
    }

    left = i
    right = i + 1

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      result++
      left -= 1
      right += 1
    }
  }

  return result


};

/**
 * time is O(n^2)
 * space is O(1)
 */

console.log(countSubstrings("abc"));