/**
 * @param {words[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  if (words.length === 1 && words[0][0] === words[0][1]) return words[0].length;
  if (words.length === 1 && words[0][0] !== words[0][1]) return 0;

  let map = {};
  let longest = 0;

  for (let i = 0; i < words.length; i++) {
    // if (words[i][0] === words[i][1] && words.indexOf([i], i + 1) === -1) {
    //   // map[words] = words.split("").reverse().join("");
    //   longest = Math.max(longest, 2);
    //   continue;
    // }

    if (Object.values(map).includes(words[i])) {
      longest += 4;
      continue;
    }

    if (!map[words[i]]) {
      map[words[i]] = words[i].split("").reverse().join("");
    }
  }

  let sameCharString = words.filter((data) => data[0] === data[1]);
  console.log(sameCharString);
  if (
    sameCharString.length === new Set(sameCharString).size ||
    sameCharString.length === 1
  ) {
    longest += 2;
  }

  return longest;
};

// console.log(longestPalindrome(["cc", "ll", "xx"]));

/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let hash = {};
  let longest = 0;
  // Build hash table with unique strings and collision rate (I did this)
  for (let word of words) {
    if (hash[word]) {
      hash[word] += 1;
    } else {
      hash[word] = 1;
    }
  }

  let flag = false;
  // Loop through words to check if reverse string exists inside table
  for (let word of words) {
    let reverse = word[1] + word[0];
    // If word is equal to reverse and it only occurs one time, note it down to add 2 later
    if (word === reverse && hash[word] === 1) {
      flag = true;
    }
    // If word is equal to reverse and it occurs multiple times
    else if (word === reverse && hash[word] > 1) {
      // Add 4 to longest as long as there are multiples of two > 1
      while (hash[word] > 1) {
        longest += 4;
        hash[word] -= 2;
      }
      // If word is equal to reverse and there is only 1 leftover, note it down to add 2 later if we have not already accounted it for another pair
      if (hash[word] === 1) flag = true;
    }
    // Check if there is another string inside of our array that is the reverse of our current word
    else if (hash[reverse]) {
      // Add both string lengths as long as both strings collision rate is greater then one
      while (hash[reverse] > 0 && hash[word] > 0) {
        longest += 4;
        hash[reverse] -= 1;
        hash[word] -= 1;
      }
    }
  }
  // Add 2 if there was a string that had equal chars. This is the string in the middle of your palindrome
  flag ? (longest += 2) : (longest += 0);
  return longest;
};

/**
 * Similar things: we both used hashmap to index all the elments
 *
 */
