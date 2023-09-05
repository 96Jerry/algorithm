const fs = require("fs");

const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const criteria = [1, 1, 2, 2, 2, 8];

const answer = [];
for (let i = 0; i < 6; i++) {
  answer.push(criteria[i] - input[i]);
}

console.log(answer.join(" "));
