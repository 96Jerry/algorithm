const fs = require('fs')
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split(" ")

let h = Number(input[0])
let m = Number(input[1])

if (m>=45){
    m = m - 45
}
else{
    h = h - 1
    if (h<0){
        h = 23
    }
    m = 60 + m - 45
}



console.log(h,m)