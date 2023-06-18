const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim()

let n = Number(input)
let result = []
for (let i=0;i<n/4;i++){
    result.push('long')
}
result.push('int')
console.log(result.join(' '))