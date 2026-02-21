/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 하나를 정해놓고 나머지 두개를 투포인터로 찾기
    // 정렬해서 중복 제거 및 투포인터 활용
    const result = []

    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue

        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while (nums[left] === nums[left-1]) left++
                while (nums[right] === nums[right+1]) right--
            } else if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            }
        }
    }

    return result
};