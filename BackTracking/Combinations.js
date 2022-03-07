/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = [] 
  
  let rangeNum = Array.from(Array(n), (_, i) => i + 1)
  console.log(rangeNum);

  const dfs = (i, rangeNum, k, slate) => {
    if (k < 0) {
      return
    }

    if (k === 0) {
      result.push(slate.slice())
      return
    }

    console.log('i: ' + i);

    for (let j = i; j < rangeNum.length; j++) {
      // console.log('j: ' + j);
      // if (i !== j && rangeNum[j] === rangeNum[j - 1]) continue

      slate.push(rangeNum[j])
      dfs(j + 1, rangeNum, k - 1, slate)
      slate.pop()
    }
  }

  dfs(0, rangeNum, k, [])
  return result
};

console.log(combine(4,5));
