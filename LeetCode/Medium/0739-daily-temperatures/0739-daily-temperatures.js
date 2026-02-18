/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const waitingDays = []
    const answer = new Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        while (waitingDays.length && temperatures[i] > temperatures[waitingDays[waitingDays.length - 1]]) {
            const day = waitingDays.pop()
            answer[day] = i - day
        }

        waitingDays.push(i)
    }

    return answer
};