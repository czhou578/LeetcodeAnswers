/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
  let longestSequenceCount = 0;

  let noDuplicates = new Set(nums) //remove duplicates

  for (let num of noDuplicates) {
    if (!noDuplicates.has(num - 1)) {
      let currentStreak = 1;
      let addTo = 1; //to be added to num

      while (noDuplicates.has(num + addTo)) {
        currentStreak++;
        addTo++;
      }

      longestSequenceCount = Math.max(longestSequenceCount, currentStreak)
    }
  }

  return longestSequenceCount
};

let nums = [0,3,7,2,5,8,4,6,0,1]

console.log('results: ' + longestConsecutive(nums))