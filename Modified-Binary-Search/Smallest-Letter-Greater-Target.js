/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
  // if (target <= letters[0]) {
  //   return letters[0]
  // }

  // let same

  // for (let i = 0; i < letters.length; i++) {
  //   if (letters[i] == target) {
  //     same = true
  //     continue
  //   }

  //   if (same) {
  //     same = false
  //     return letters[i]
  //   }

  //   if (letters[i] < target) return letters[i]
  // }
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() > target.charCodeAt()) {
        return letters[i];
    }
  }
  return letters[0];

};

nextGreatestLetter(['c', 'f', 'g', 'j'], 'c')