const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim()

const gap = 2541-1998

console.log(input - gap)