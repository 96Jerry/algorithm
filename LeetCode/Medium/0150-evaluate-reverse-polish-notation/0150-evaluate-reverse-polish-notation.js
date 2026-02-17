/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // tokens를 돌면서 연산자가 나오면 그 전 두 수를 연산한다.
    // 계산 하는 곳을 만들어두고 순서대로 처리하도록 한다.
    // 그 이전 수 두개를 처리하려고 하면 뒤로 갈수록 너무 복잡해지고 시간이 오래 걸린다.
    // 배열을 만들어놓고 하나씩 빼서 사용
    const operators = ['+', '-', '*', '/']
    const numbers = []

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]

        if (operators.indexOf(token) > -1) {
            const number2 = numbers.pop()
            const number1 = numbers.pop()

            switch (token) {
                case '+':
                    numbers.push(number1 + number2)
                    break
                case '-':
                    numbers.push(number1 - number2)
                    break
                case '*':
                    numbers.push(number1 * number2)
                    break
                case '/':
                    numbers.push(Math.trunc(number1 / number2))
                    break
                default:
                    throw new Error()
            }
        } else {
            numbers.push(Number(token))
        }

    }

    return numbers[0]
};