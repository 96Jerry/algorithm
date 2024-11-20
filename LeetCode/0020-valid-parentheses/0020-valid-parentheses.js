/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const closeBrackets = [')', '}', ']']
    const mapBracket = new Map([['(', ')'], ['{', '}'], ['[', ']']])
    let flag = true
    // let closeBracketCount = 0


    if (s.length === 1) {
        return false
    }

    for (const str of [...s]) {
        flag = true
        if (closeBrackets.includes(str)) {
            // closeBracketCount++
            if (mapBracket.get(stack[stack.length - 1]) !== str) {
                return false
            }

            stack.splice(stack.length - 1, 1)
            flag = false
        }

        if(flag === true){
            stack.push(str)
        }
        
    }

    if(stack.length > 0){
        return false
    }

    return true
};