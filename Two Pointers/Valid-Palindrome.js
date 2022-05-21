/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1
  
  while (start < end) {

    while (start < end && !alphanumeric(s.charAt(start))) start++
    while (start < end && !alphanumeric(s.charAt(end))) end++

    if (s.charAt(start).toLowerCase() !== s.charAt(end).toLowerCase()) {
      return false
    }

    start++
    high--
  }

  return true;
};

const alphanumeric = (character) => {
  let code = character.charCodeAt();

  return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

/**
 * O(n) time 
 * O(1) space
 */