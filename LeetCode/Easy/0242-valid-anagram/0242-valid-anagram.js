/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const l = s.length
    if (t.length !== l) return false

    s = [...s].sort()
    t = [...t].sort()

    for (let i = 0; i < l; i++) {
        if (s[i] !== t[i]) return false
    }

    return true
};