/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const a = [...s].filter((el) => (el.charCodeAt(0) >= 'A'.charCodeAt(0) && el.charCodeAt(0) <= 'Z'.charCodeAt(0)) || (el.charCodeAt(0) >= 'a'.charCodeAt(0) && el.charCodeAt(0) <= 'z'.charCodeAt(0)) || (el.charCodeAt(0) >= '0'.charCodeAt(0) && el.charCodeAt(0) <= '9'.charCodeAt(0))).map((el) => el.toLowerCase())
    console.log(a)
    for (let i = 0; i < Math.floor(a.length / 2); i++) {
        if (a[i] !== a[a.length - 1 - i]) return false
    }

    return true
};