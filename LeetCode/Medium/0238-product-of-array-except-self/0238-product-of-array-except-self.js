/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 0이 없으면 다 곱한 값에서 각 원소를 나눔
    // 0이 하나만 있으면 원래대로 하되 0이 아닌 부분은 다 0
    // 0이 두개 이상 있으면 다 0

    // 0을 세서 두개 이상 있으면 다 0인 배열 반환
    // 하나만 있으면 0 빼고 다 곱한 값을 그곳에 넣고 나머지는 다 0 넣어서 배열 반환
    // 0이 없으면 다 곱한 값을 구하고 각 원소로 나눈 배열 반환
    // 0을 세면서 동시에 answer를 채울 수 있을까?
    // 나누려는 원소가 0이면 나누지 않고
    // 어쨌든 모두 곱한 값, 각 원소로 나눈 값이 필요해서 두번은 돌아야 함
    const zeroIndexes = []
    let product = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroIndexes.push(i)
        } else {
            product *= nums[i]
        }
    }

    if (zeroIndexes.length >= 2) {
        return new Array(nums.length).fill(0)
    } else if (zeroIndexes.length === 1) {
        const answer = new Array(nums.length).fill(0)
        answer[zeroIndexes[0]] = product
        return answer
    } else {
        const answer = nums.map((num) => product / num)
        return answer
    }
};