/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let product = 1
    let zeroCount = 0
    const zeroIndex = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++
            zeroIndex.push(i)
            if (zeroCount >= 2) {
                break
            }
            continue
        }

        product *= nums[i]
    }

    const answer = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        if (zeroCount >= 2) {
            answer.fill(0)
            break
        } else if (zeroCount === 1) {
            answer.fill(0)
            answer[zeroIndex[0]] = product
            break
        } else {
            answer[i] = product / nums[i]
        }
    }

    return answer
};