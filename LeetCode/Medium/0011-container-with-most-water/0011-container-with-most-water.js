/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1

    let answer = Math.min(height[left], height[right]) * (right - left)
    while (left < right) {
        if (height[left] <= height[right]) {
            left++
            answer = Math.max(answer, Math.min(height[left], height[right]) * (right - left))
        } else if (height[left] > height[right]) {
            right--
            answer = Math.max(answer, Math.min(height[left], height[right]) * (right - left))
        }
    }

    return answer
};