/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '')

    s = s.toLowerCase()

    const t = s.split('').reverse().join('')

    return t === s
};