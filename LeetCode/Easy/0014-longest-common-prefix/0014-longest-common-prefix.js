/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const shortestStr = strs.toSorted((a,b)=>a.length - b.length)[0]
    if(shortestStr.length === 0){
        return ''
    }

    let prefix
    for(let i=0; i< shortestStr.length; i++){
        prefix = shortestStr.slice(0,i+1)
        for(const str of strs){
            if(!str.startsWith(prefix)){
                return prefix.slice(0, -1)
            }
        }
    }

    return prefix
};