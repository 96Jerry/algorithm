const fs = require('fs')

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filepath).toString().trim().split('\n')

for (let i = 1;i<input.length;i++){
    
    console.log(input[i][0]+input[i][input[i].trim().length-1])
}