const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = input.length
for (let i=0;i<n;i++){
    let a = input[i].split(' ')
    let result = Number(a[0]) + Number(a[1])
    console.log(result)
}