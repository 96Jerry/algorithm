const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim()

let x = Number(input[0])

for (let i=1;i<10;i++){
    console.log(`${x} * ${i} = ${i*x}`)
}