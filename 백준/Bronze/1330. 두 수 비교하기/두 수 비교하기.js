const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split(" ")

A = Number(input[0])
B = Number(input[1])

if (A > B){
    console.log(">")
}
if (A < B){
    console.log("<")
}
if (A === B){
    console.log("==")
}