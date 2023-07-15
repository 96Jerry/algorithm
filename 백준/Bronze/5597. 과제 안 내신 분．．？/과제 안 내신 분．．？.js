const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const answer = [];
for (let i = 1; i <= 30; i++) {
  if (!input.includes(i.toString())) {
    answer.push(i);
  }
}

console.log(answer.join(' '));
