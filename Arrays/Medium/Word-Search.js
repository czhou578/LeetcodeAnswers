/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word.charAt(0) && dfs(i, j, board, word, 0)) {
        return true
      }
    }
  }
  
  return false
};

const dfs = (i, j, board, word, counter) => {
  // if (j === 0 ) {
  //   dfs(i + 1, j, board, word, counter + 1)
  //   dfs(i, j + 1, board, word, counter + 1)

  // } else if ()

  // if (board[i][j] !== word.charAt(counter)) {
  //   return false
  // }

  // if (board[i][j] === word.charAt(counter) && counter === word.length - 1) {
  //   return true
  // }

  if (counter === word.length) return true

  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word.charAt(counter)) {
    return false
  }

  let temp = board[i][j]
  board[i][j] = ''
  let found = dfs(i + 1, j, board, word, counter + 1) || dfs(i - 1, j, board, word, counter + 1) || dfs(i, j + 1, board, word, counter + 1)
    || dfs(i, j - 1, board, word, counter + 1) 

  board[i][j] = temp
  return found
}

/**
 * Run Time (Colin's guess): O(n^2) since there are two loops that worst case can run both to completion
 * Space Time (Colin's guess): O(n^2) since if we have to dfs across the whole board, each row, each column
 * 
 * Actual Space Time (yes, correct)
 * Actual Run Time (yes, correct) 
 */