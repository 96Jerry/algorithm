/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const results = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        // 중복 건너뛰기
        if (i > 0 && nums[i] === nums[i - 1]) continue

        left = i + 1
        right = nums.length - 1
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right]

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]])

                // 중복 건너뛰기
                while (nums[left + 1] === nums[left]) left++
                while (nums[right - 1] === nums[right]) right--

                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }

    return results
};