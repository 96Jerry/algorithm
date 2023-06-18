const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let total = Number(input[0])
let n = Number(input[1])

let result = 0
for (let i=2;i<n+2;i++){
    let price = input[i].split(' ')
    result += Number(price[0]) * Number(price[1])
}

result === total ? console.log('Yes') : console.log('No')