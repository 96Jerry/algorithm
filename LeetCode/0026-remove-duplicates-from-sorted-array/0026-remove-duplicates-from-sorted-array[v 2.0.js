/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const stack = []

    for (const num of nums) {
        if (stack.length === 0 || stack[stack.length - 1] !== num) {
            stack.push(num)
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = stack[i]
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === undefined) {
            nums.splice(i)
        }
    }

    return stack.length
};