const fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let a = new Set()

for ( let i = 0; i < 10; i++ ){
    a.add(input[i] % 42)
}

console.log(a.size)