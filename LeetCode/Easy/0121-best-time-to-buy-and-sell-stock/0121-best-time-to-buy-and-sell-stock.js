/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let answer = 0
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        answer = Math.max(answer, price - minPrice);
    }

    return answer
};