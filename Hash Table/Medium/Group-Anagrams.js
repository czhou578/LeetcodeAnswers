/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  if (strs.length === 0) return [""]

  if (strs.length === 1) return [[strs[0]]]

  let obj = {}

  for (const word of strs) {
    let string = word.split("").sort().join("")
    if (obj[string]) {
      obj[string].push(word)
    } else {
      obj[string] = [word]
    }
  }

  return Object.values(obj)
};

/**
 * Run Time: O(n * Klog(k)) where k is the length of the string and n is the length of the array
 * Space Time: O(n)
 */