/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  //find all index occurrences of all chars in t in s, store in obj
  // A: 0
  // A: 10
  // B: 3
  // B: 9
  // C: 5
  // C: 12

  //sort ascending
  //find the min range between all characters

  if (t === "") return "";
  let window = {};
  let countT = {};

  for (const letter of t) {
    countT[letter] ? countT[letter]++ : (countT[letter] = 1);
  }

  let have = 0;
  let need = Object.keys(countT).length;
  let result = [-1, -1];
  let resultLength = Infinity;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let temp = s[right];
    window[temp] ? window[temp]++ : (window[temp] = 1);

    if (countT[temp] && window[temp] === countT[temp]) {
      have++;
    }

    while (have === need) {
      if (right - left + 1 < resultLength) {
        result = [left, right];
        resultLength = right - left + 1;
      }

      window[s[left]] -= 1;
      if (s[left] in countT && window[s[left]] < countT[s[left]]) {
        have -= 1;
      }

      left += 1;
    }
  }

  let leftResult = result[0];
  let rightResult = result[1];

  return resultLength !== Infinity
    ? s.substring(leftResult, rightResult + 1)
    : "";
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
