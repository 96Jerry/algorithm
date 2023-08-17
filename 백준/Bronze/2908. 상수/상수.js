const fs = require('fs')

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filepath).toString().trim().split(' ')

const a = input[0].split('').reverse().join('')
const b = input[1].split('').reverse().join('')

const answer = (a>b) ? a : b

console.log(answer)