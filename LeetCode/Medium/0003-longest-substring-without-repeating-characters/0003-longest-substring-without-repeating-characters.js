/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 별도 변수를 만들어서 s를 앞에서부터 순서대로 한글자씩 넣어준다.
    // 중복되는 문자가 나오지 않으면 계속 answer를 업데이트 해준다.
    // 중복되는 문자가 나오면 별도 변수의 맨앞을 제거하고 s에 대해 다시 작업을 반복한다.
    const sArray = s.split("");

    let uniqueArray = [];
    let answer = 0;
    while (sArray.length > 0) {
        uniqueArray.push(sArray.shift());

        const isUniqueArrayUnique =
            uniqueArray.length === new Set(uniqueArray).size;
        if (isUniqueArrayUnique) {
            answer = Math.max(uniqueArray.length, answer);
        } else {
            uniqueArray.shift();
        }
    }

    return answer;
};