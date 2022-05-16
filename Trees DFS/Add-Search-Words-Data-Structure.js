
var WordDictionary = function() {
  this.m = new Map() 
  //time complexity: O(1)
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let last = word.length

  if (this.m.has(last)) {
    this.m.get(last).push(word)
  } else {
    this.m.set(last, [word])
  }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let len = word.length

  if (!this.m.has(len)) {
    return false
  }

  let words = this.m.get(len)

  for (let i = 0; i < words.length; i++) {
    let match = true;
    for (let j = 0; j < words[i].length; j++) {
        if (word[j] !== "." && word[j] !== words[i][j]) {
            match = false;
            break;
        }
    }
    if (match) {
        return true;
    }
  }
  
  return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */