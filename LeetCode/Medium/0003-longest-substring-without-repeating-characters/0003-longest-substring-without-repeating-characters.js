/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let answer = 0
    let left = 0
    const wordIndexMap = new Map()

    for (let right = 0; right < s.length; right++) {
        if (wordIndexMap.has(s[right]) && wordIndexMap.get(s[right]) >= left) {
            left = wordIndexMap.get(s[right]) + 1
        }
        
        answer = Math.max(answer, right - left + 1)
        wordIndexMap.set(s[right], right)
    }

    return answer
};