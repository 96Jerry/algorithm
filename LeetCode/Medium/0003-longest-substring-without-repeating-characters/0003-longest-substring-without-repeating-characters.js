/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let answer = 0
    let left = 0
    let right = 0
    const uniqueWords = new Set()

    while (left <= right && right < s.length) {
        while (uniqueWords.has(s[right])) {
            uniqueWords.delete(s[left])
            left++
        }
        uniqueWords.add(s[right])
        answer = Math.max(right - left + 1, answer)
        right++
    }

    return answer
};