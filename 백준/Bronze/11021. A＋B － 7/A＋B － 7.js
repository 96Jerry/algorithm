const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const n = Number(input[0])
for (i=1;i<n+1;i++){
    let a = input[i].split(' ')
    let result = Number(a[0]) + Number(a[1])
    console.log(`Case #${i}: ${result}`)
}