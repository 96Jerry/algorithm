const fs = require('fs')
const filePath = process.platform === "linux" ? 0 : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const x = Number(input[0])
const y = Number(input[1])

if (x>0 && y>0){
    console.log(1)
}
else if (x>0 && y<0){
    console.log(4)
}
else if (x<0 && y>0){
    console.log(2)
}
else if (x<0 && y<0){
    console.log(3)
}