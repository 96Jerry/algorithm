/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // nums를 순회하면서 하나 고르면 다른 하나 정해짐. 있으면 출력
    for (let i = 0; i < nums.length; i++) {
        const j = nums.indexOf(target - nums[i])
        if (j > -1 && j !== i) return [i, j]
    }
};