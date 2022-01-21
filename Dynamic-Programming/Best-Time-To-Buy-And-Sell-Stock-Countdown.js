/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let hashmap = {}

  const dfs = (i, buying) => {
    if (i >= prices.length) {
      return 0;
    }

    if (Object.keys(hashmap).includes((i, buying))) {
      return hashmap[(i, buying)]
    }

    if (buying) {
      let buy = dfs(i + 1, !buying) - prices[i]
      let cooldown = dfs(i + 1, buying)
      hashmap[(i, buying)] = Math.max(buy, cooldown)
    } else {
      let sell = dfs(i + 2, !buying) + prices[i]
      let cooldown = dfs(i + 1, buying)
      hashmap[(i, buying)] = Math.max(sell, cooldown)
    
    }

    return hashmap[(i, buying)]
  }

  return dfs(0, true)
};

let test = [1,2,3,0,2]
console.log(maxProfit(test));


/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let sold = Number.NEGATIVE_INFINITY;
  let held = Number.NEGATIVE_INFINITY;
  let reset = 0;

  for (let price of prices) {
    let preSold = sold;

    sold = held + price;
    held = Math.max(held, reset - price);
    reset = Math.max(reset, preSold);
    console.log(sold, held, reset);
  }

  return Math.max(sold, reset);
};