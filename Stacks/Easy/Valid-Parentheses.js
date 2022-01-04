/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const element = stack[stack.length - 1];

    if (s[i] == '{' || s[i] == '[' || s[i] == '(') {
      stack.push(s[i])

    } else if (s[i] == '}' && element == '{' && stack.length !== 0) {
      stack.pop(s[i])
    } else if (s[i] == ')' && element == '(' && stack.length !== 0) {
      stack.pop(s[i])
    } else if (s[i] == ']' && element == '[' && stack.length !== 0) {
      stack.pop(s[i])
    } else {
      return false
    }
    
  }

  return stack.length === 0
};