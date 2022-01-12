/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  const results = []
  nums.sort((a, b) => a - b)

  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      results.push(nums.slice())
      return;
    }

    dfs(i + 1, nums, slate)

    slate.push(nums[i])
    dfs(i + 1, nums, slate)
    slate.pop()
  }

  dfs(0, nums, [])

  const obj = {}
  for (let element of results) {
    if (obj[element]) continue
    obj[element] = element
  }

  return Object.values(obj)
};