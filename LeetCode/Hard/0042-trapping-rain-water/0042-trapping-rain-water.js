/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 양쪽에서 오면서 확인.
    let left = 0
    let right = height.length - 1

    let leftMax = -Infinity
    let rightMax = -Infinity
    let total = 0
    while (left < right) {
        if (height[left] <= height[right]) {
            if (leftMax <= height[left]) {
                leftMax = height[left]
            } else {
                total += leftMax - height[left]
            }
            left++
        } else {
            if (rightMax <= height[right]) {
                rightMax = height[right]
            } else {
                total += rightMax - height[right]
            }
            right--
        }
    }

    return total
};