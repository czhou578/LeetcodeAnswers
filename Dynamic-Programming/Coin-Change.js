/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let amountArray = new Array(amount + 1).fill(Infinity)
  amountArray[0] = 0
  
  for (const coin of coins) {
    for (let i = 0; i < amountArray.length; i++) {
      if (coin <= i) { 
        let index = i - coin;
        let potentialAmt = amountArray[index] + 1
        amountArray[i] = Math.min(potentialAmt, amountArray[i])
      }
    }
  }

  return amountArray[amountArray.length - 1] === Infinity ? -1 : amountArray[amountArray.length - 1]
};

/**
 * start the problem with value 0 for amountArray[0]
 * Subtract amount from the index, and compare whether the min has been found. 
 * If at the end, the last element in the array is infinty, then combination cannot be 
 * made from coins
 * 
 */