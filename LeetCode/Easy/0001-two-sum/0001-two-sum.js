/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const partner = target - num
        if (map.has(partner)) return [map.get(partner), i]
        map.set(num, i)
    }
};