/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let longest = 0
    for (const n of set) {
        if (set.has(n - 1)) continue

        let length = 1
        let cur = n
        while (set.has(cur + 1)) {
            length++
            cur++
        }

        longest = Math.max(longest, length)
    }

    return longest
};