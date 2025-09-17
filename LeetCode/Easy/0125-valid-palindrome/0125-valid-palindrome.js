/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    if (s.length === 0) {
        return true
    }

    if ([...s].reverse().join('') === s) {
        return true
    }

    return false
};
