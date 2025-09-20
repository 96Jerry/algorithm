/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity
    let maxProfit = 0

    for (const price of prices) {
        if (minPrice > price) {
            minPrice = price
        } else if (maxProfit < price - minPrice) {
            maxProfit = price - minPrice
        }
    }

    return maxProfit
};