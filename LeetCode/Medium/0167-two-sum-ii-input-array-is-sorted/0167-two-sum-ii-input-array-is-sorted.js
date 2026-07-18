/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // numbers를 돌면서 target을 만족하는 두 수 쌍이 있는지 확인 및 인덱스 반환
    const map = new Map()
    for(let i = 0; i < numbers.length; i++) {
        map.set(numbers[i], i)
    }

    for(let i = 0; i < numbers.length; i++) {
        const other = target - numbers[i]
        if (map.has(other)) return [i + 1, map.get(other) + 1]
    }
};