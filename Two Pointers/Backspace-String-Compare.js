/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

  // let resultString1 = ''
  // let resultString2 = ''

  // for (let i = 0; i < s.length - 1;) {
  //   if (s.charAt(i + 1) === '#' && i + 1 === s.length - 1) {
  //     break;
  //   }
    
  //   if (s.charAt(i + 1) === '#') {
  //     i += 2
  //     continue
  //   }

  //   resultString1 += s.charAt(i)
  //   i++
  // }    

  // for (let i = 0; i < t.length - 1;) {
  //   if (t.charAt(i + 1) === '#' && i + 1 === t.length - 1) {
  //     break;
  //   }
    
  //   if (t.charAt(i + 1) === '#') {
  //     i += 2
  //     continue
  //   }

  //   resultString2 += t.charAt(i)
  //   i++
  // } 

  // return resultString1 === resultString2 ? true : false

  let stack = []
  let stack2 = []

  for (let character of s) {
    if (character === '#') {
      stack.pop()
      continue
    }

    stack.push(character)
  } 

  for (let character of s) {
    if (character === '#') {
      stack.pop()
      continue
    }

    stack.push(character)
  } 

  if (stack.toString() === stack2.toString()) {
    return true
  }

  return false

};