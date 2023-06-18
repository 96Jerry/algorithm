const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim()

let n = Number(input)

let total = 0
for (let i=1;i<n+1;i++){
    total += i
}
console.log(total)