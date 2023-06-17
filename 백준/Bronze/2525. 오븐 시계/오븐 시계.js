const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input2 = fs.readFileSync(filePath).toString().trim().split('\n')
const input1 = input2[0].split(' ')

let h = Number(input1[0])
let m = Number(input1[1])
let x = Number(input2[1])

let a = Math.floor(x / 60)
let b = x - 60*a
h += a
if (h>23){
    h -= 24
}
m += b
if (m >= 60){
    h += 1
    m -= 60
    if (h > 23){
        h -= 24
    }
}

console.log(h,m)