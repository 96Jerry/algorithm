/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var calSize = function (i, j) {
        if (i === j) return -1

        return Math.abs(i - j) * Math.min(height[i], height[j])
    }

    let left = 0
    let right = height.length - 1
    let maxWaterSize = -1

    while (left < right) {
        maxWaterSize = Math.max(maxWaterSize, calSize(left, right))

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxWaterSize
};