/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    nums.sort((a, b) => a - b)

    let left = 0
    let right = nums.length - 1
    while (left < right) {
        const num1 = nums[left]
        const num2 = nums[right]
        const sum = num1 + num2
        if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        } else {
            return [left, right]
        }
    }
};