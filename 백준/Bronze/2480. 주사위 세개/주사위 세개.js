const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split(' ')

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])

let total
if (a === b && b === c){
    total = 10000 + a * 1000
}
else if (a === b || b === c || a === c){
    let x
    if (a === b){
        x = a
    }
    else if (b === c){
        x = b
    }
    else {
        x = c
    }
    total = 1000 + x * 100
}
else{
    total = Math.max(a,b,c) * 100
}

console.log(total)