const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split(" ")

A = Number(input[0])
B = Number(input[1])
C = Number(input[2])

console.log(A+B+C)