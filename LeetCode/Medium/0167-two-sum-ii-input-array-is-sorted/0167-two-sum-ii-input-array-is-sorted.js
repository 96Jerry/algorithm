/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];   // 1-indexed
        } else if (sum < target) {
            left++;    // 합이 부족 → 더 큰 값 쪽으로
        } else {
            right--;   // 합이 초과 → 더 작은 값 쪽으로
        }
    }
    return [];  // 문제 보장상 도달하지 않음
};