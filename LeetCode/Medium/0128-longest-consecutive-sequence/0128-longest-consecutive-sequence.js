/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) {
        return 0
    }

    const numsSet = new Set(nums)
    let longest = 1
    for (const num of numsSet) {
        if (!numsSet.has(num - 1)) {
            let length = 1
            while (numsSet.has(num + length)) {
                length++
            }

            longest = Math.max(length, longest)
        }
    }

    return longest
};