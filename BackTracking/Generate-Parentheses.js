/**
 * @param {number} n
 * @return {string[]}
 */

 function isValid(str) {
  let stack = []
  let i = 0;
  let len = str.length;

  while (i < len) {
    let element = str[i]
    stack.push(element)

    let openParen = stack[stack.length - 2]
    let closeParen = stack[stack.length - 1]

    if (openParen + closeParen == '()') {
      stack.pop()
      stack.pop()
    }

    i++
  }

  return stack.length == 0
}

 var generateParenthesis = function(n) {
  let result = []
  
  const dfs = (i, n, slate) => {
    if (i === n * 2) {
      if (isValid(slate.join(''))) {
        result.push(slate.join(''))
      }

      return
    }

    slate.push('(')
    dfs(i + 1, n, slate)
    slate.pop()

    slate.push(')')
    dfs(i + 1, n, slate)
    slate.pop()
  }

  dfs(0, n, [])
  return result
};