const fs = require('fs')

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filepath).toString().trim()

const alphabets = 'abcdefghijklmnopqrstuvwxyz'
let answer = []

for (const alphabet of alphabets){
    answer.push(input.indexOf(alphabet))
}

console.log(answer.join(" "))