/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    // 수학적 계산이 필요. 빨리 도착하는 차는 앞차에 합류
    const n = position.length

    let fleetCount = 0
    let times = position.map((el, i) => ([el, i])).toSorted((a, b) => b[0] - a[0]).map(el => ((target - el[0]) / speed[el[1]]))

    let maxTime = 0
    for (const time of times) {
        if (maxTime < time) {
            fleetCount++
            maxTime = time
        }
    }

    return fleetCount
};