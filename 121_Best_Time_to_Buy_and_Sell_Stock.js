/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        let CurrentProfit = prices[i] - minPrice;
        maxprofit = Math.max(maxprofit, CurrentProfit);
        if (minPrice > prices[i]) minPrice = prices[i];
    }
    return maxprofit;
};