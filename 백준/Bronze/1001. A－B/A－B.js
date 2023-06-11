const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt"
const input = fs.readFileSync(filePath).toString().split(" ")

console.log(parseInt(input[0]) - parseInt(input[1]))