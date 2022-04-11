/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let current_Profit = prices[0]
  
  for (let i = 1; i < prices.length; i++) {
    if (current_Profit < prices[i]) {
      maxProfit = Math.max(maxProfit, prices[i] - current_Profit)
    } else {
      current_Profit = prices[i]
    }
  }

  return maxProfit
};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */