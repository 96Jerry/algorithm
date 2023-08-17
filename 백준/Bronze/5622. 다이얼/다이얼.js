const fs = require('fs')

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filepath).toString().trim()

let a = new Map()

a.set('A', 2)
a.set('B', 2)
a.set('C', 2)
a.set('D', 3)
a.set('E', 3)
a.set('F', 3)
a.set('G', 4)
a.set('H', 4)
a.set('I', 4)
a.set('J', 5)
a.set('K', 5)
a.set('L', 5)
a.set('M', 6)
a.set('N', 6)
a.set('O', 6)
a.set('P', 7)
a.set('Q', 7)
a.set('R', 7)
a.set('S', 7)
a.set('T', 8)
a.set('U', 8)
a.set('V', 8)
a.set('W', 9)
a.set('X', 9)
a.set('Y', 9)
a.set('Z', 9)

let answer = 0
for (let i of input){
    answer += a.get(i)+1
}

console.log(answer)