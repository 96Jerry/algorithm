/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // 투 포인터 사용
    let left = 0
    let right = numbers.length - 1

    while (left < right) {
        const sum = numbers[left] + numbers[right]
        if (target > sum) {
            left++
        } else if (target < sum) {
            right--
        } else {
            return [left + 1, right + 1]
        }
    }
};