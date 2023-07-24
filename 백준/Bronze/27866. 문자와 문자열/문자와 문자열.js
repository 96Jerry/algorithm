const fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const result = input[0][input[1]-1]
console.log(result)