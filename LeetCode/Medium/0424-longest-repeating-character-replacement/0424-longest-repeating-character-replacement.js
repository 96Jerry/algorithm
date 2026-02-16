/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0
    let maxCount = 0
    let maxLength = 1
    const charCount = {}

    for (let right = 0; right < s.length; right++) {
        const char = s[right]
        charCount[char] = (charCount[char] || 0) + 1
        maxCount = Math.max(charCount[char], maxCount)

        while (right - left + 1 - maxCount > k) {
            charCount[s[left]] -= 1
            left++
            continue
        }

        maxLength = Math.max(right - left + 1, maxLength)
    }

    return maxLength
};