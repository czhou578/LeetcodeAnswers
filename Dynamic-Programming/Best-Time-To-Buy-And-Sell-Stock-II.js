/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let maxProfit = 0;
  let buyPrice = prices[0]
  // let sellPrice;
  
  for (let i = 1; i < prices.length; i++) {
    if (buyPrice < prices[i]) {
      maxProfit += prices[i] - buyPrice
      buyPrice = prices[i]
    } else {
      // sellPrice = prices[i - 1]
      buyPrice = prices[i]
    }
  }

  return maxProfit
};

let test = [7,1,5,3,6,4]

console.log(maxProfit(test));

/**
 * Time complexity: O(n)
 * space complexity: O(1)
 * 
 * LESSON: instead of using two pointers to keep track of which is greater, just move the 
 * buy price along with the index. This is why the problem allows buying and selling on the 
 * same day!
 */