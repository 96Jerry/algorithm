/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0
    let left = 0
    for (let right = left; right < prices.length; right++) {
        if (prices[right] < prices[left]) {
            left = right
        } else {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left])
        }
    }

    return maxProfit
};