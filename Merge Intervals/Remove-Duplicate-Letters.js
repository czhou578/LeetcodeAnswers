/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    
    if (stack.indexOf(element) > -1) continue
    
    console.log(element);
    while (stack.length > 0 && stack[stack.length - 1] > element && s.indexOf(stack[stack.length - 1], i) > i) {
      stack.pop()
    }

    stack.push(element)
  }

  return stack.join("")
};

let test = "cbacdd"

console.log(removeDuplicateLetters(test));

/**
 * While stack is not empty, top of stack is greater then string char, and if top of stack still exists in uniterated array, pop out
 * 
 * Key: the last while loop condition will allow for combinations like "d", "b", even though b is smaller then d. It will return -1 since the 
 * "continue" line will filter out all future occurrences of the top of the stack. It kind of is a dummy check
 */