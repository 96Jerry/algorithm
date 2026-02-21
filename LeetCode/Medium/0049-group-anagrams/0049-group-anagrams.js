/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map()

    for (const str of strs) {
        const strSorted = [...str].toSorted().join('')
        if (!map.has(strSorted)) {
            map.set(strSorted, [str])
        } else {
            map.get(strSorted).push(str)
        }
    }

    return [...map.values()]
};