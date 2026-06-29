/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // strs 돌면서 str 정렬
    // 새로운 배열(정렬된 strs)에 대해 해시맵(애나그램 집합)에 넣음. key=애나그램, value=인덱스
    // strs를 돌면서 출력물을 뽑아냄

    const sortedStrs = strs.map((str) => [...str].sort().join(''))
    const anagramMap = new Map()
    for (let i = 0; i < sortedStrs.length; i++) {
        if (!anagramMap.has(sortedStrs[i])) {
            anagramMap.set(sortedStrs[i], [i])
        } else {
            anagramMap.get(sortedStrs[i]).push(i)
        }
    }

    const answer = []
    for (const [key, value] of anagramMap) {
        const subAnswer = []
        for (const index of value) {
            subAnswer.push(strs[index])
        }
        answer.push(subAnswer)
    }
    
    return answer
};