const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n')

// console.log(input)

let n = input.length - 1

for (let i=1;i<=n;i++){
    let x = input[i].split(' ')
    let a = Number(x[0])
    let b = Number(x[1])
    console.log(a+b)
}