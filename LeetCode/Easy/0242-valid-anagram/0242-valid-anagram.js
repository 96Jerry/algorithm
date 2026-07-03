/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const base = 'a'.charCodeAt(0)

    const anagramCodeMaker1 = new Array(26).fill(0)
    const anagramCodeMaker2 = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        anagramCodeMaker1[s.charCodeAt(i) - base] += 1
        anagramCodeMaker2[t.charCodeAt(i) - base] += 1
    }

    return anagramCodeMaker1.join('') === anagramCodeMaker2.join('')
};