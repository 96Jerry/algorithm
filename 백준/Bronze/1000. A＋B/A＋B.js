const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()
const a = input.split(' ')
console.log(parseInt(a[0]) + parseInt(a[1]))