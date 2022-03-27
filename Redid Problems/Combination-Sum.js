/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  let results = []
  candidates.sort((a,b) => a - b)

  const defs = (i, candidates, target, slate) => {
    if (target < 0) return

    if (target === 0) {
      results.push(slate.slice())
      return;
    }

    for (let j = i; j < candidates.length; j++) {
      slate.push(candidates[j])
      defs(j, candidates, target - candidates[j], slate)
      slate.pop()
    }
  }

  defs(0, candidates, target, [])
  return results
};

/**
 * Time Complexity: O(2^n * n)
 * Space Complexity: O(2^n * n)
 */