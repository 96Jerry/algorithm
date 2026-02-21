/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let answer = 0
    let left = 0
    const map = new Map()
    for (let right = left; right < s.length; right++) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1
        }

        map.set(s[right], right)
        answer = Math.max(answer, right - left + 1)
    }

    return answer
};