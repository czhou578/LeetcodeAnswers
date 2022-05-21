/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  let sString = s.split("").sort().join("")
  let tString = t.split("").sort().join("")
  
  let obj = {}
  let obj2 = {}


  for (let i = 0; i < sString.length; i++) {
    obj[sString[i]] = (obj[sString[i]] + 1) || 1
  }

  for (let i = 0; i < tString.length; i++) {
    obj2[tString[i]] = (obj2[tString[i]] + 1) || 1
  }

  return JSON.stringify(obj) === JSON.stringify(obj2)
  
};

/**
 * O(2n) time
 * O(2n) space
 * not optimized
 */