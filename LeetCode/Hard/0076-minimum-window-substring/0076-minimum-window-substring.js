/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const m = s.length
    const n = t.length

    if (m < n) {
        return ''
    }

    const tCharCount = {}
    let required = 0
    for (const char of t) {
        if (!tCharCount[char]) required++
        tCharCount[char] = (tCharCount[char] || 0) + 1
    }

    let left = 0
    let formed = 0
    let minIndex = [0, 0]
    let minLength = Infinity
    const sCharCount = {}

    for (let right = 0; right < m; right++) {
        const char = s[right]
        sCharCount[char] = (sCharCount[char] || 0) + 1

        if (tCharCount[char] && sCharCount[char] === tCharCount[char]) {
            formed++
        }

        while (formed === required) {
            if (right - left + 1 < minLength) {
                minIndex = [left, right]
                minLength = right - left + 1
            }

            const leftChar = s[left]
            sCharCount[leftChar]--
            if (tCharCount[leftChar] && sCharCount[leftChar] < tCharCount[leftChar]) {
                formed--
            }
            left++
        }
    }

    const [minLeft, minRight] = minIndex

    return minLength === Infinity ? '' : s.slice(minLeft, minRight + 1)
};

var IncludesSubstring = (xCharCount, substringCharCount) => {
    for (const [key, value] of Object.entries(substringCharCount)) {
        if ((xCharCount[key] || 0) < value) return false
    }

    return true
}