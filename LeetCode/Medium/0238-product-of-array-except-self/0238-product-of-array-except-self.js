/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n);

    // 1패스(왼→오): answer[i] = i 왼쪽 원소들의 곱
    // 대입을 먼저 하고 곱하므로, nums[i] 자신은 절대 포함되지 않는다
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    // 2패스(오→왼): 오른쪽 곱을 변수 하나로 누적하며 answer에 곱해준다
    // 별도 right 배열이 필요 없다 → extra space O(1)
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;
        suffix *= nums[i];
    }

    return answer;
};