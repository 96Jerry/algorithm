/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let right = height.length - 1

    let leftMax = height[left]
    let rightMax = height[right]
    let totalRain = 0

    while (left < right) {
        if (leftMax <= rightMax) {
            left++
            leftMax = Math.max(leftMax, height[left])
            totalRain += leftMax - height[left]
        } else {
            right--
            rightMax = Math.max(rightMax, height[right])
            totalRain += rightMax - height[right]
        }
    }

    return totalRain
};