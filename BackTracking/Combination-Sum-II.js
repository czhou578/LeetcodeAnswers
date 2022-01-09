/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let result = []

  const sorted = candidates.sort((a, b) => a - b)
  
  const dfs = (i, sorted, target, slate) => {
    if (target < 0) return;

    if (target == 0) {
      result.push(slate.slice())
      return;
    }

    for (let j = i; j < sorted.length; j++) {
      if (i !== j && sorted[j] == sorted[j - 1]) continue
      slate.push(sorted[j])
      dfs(j + 1, sorted, target - sorted[j], slate)
      slate.pop()      
    }
  }

  dfs(0, candidates, target, [])
  return result;
};