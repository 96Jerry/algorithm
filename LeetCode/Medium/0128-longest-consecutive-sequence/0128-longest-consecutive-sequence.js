/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums)

    let answer = 0
    for (const num of set) {
        if (!set.has(num - 1)) {
            let temp = 1
            let current = num
            while (set.has(current + 1)) {
                temp++
                current++
            }
            answer = Math.max(answer, temp)
        }
    }

    return answer
};