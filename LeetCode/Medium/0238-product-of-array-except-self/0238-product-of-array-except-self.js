/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    if (nums.filter(el => el === 0).length === 1) {
        const array = new Array(nums.length).fill(0)
        array[nums.indexOf(0)] = nums.reduce((acc, cur) => cur === 0 ? acc : acc * cur, 1)

        return array
    }

    const product = nums.reduce((acc, cur) => acc * cur, 1)
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] === 0 ? 0 : product / nums[i]
    }

    return nums
};