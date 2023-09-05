const fs = require("fs");

filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
input = fs.readFileSync(filePath).toString().split(" ");

criteria = [1, 1, 2, 2, 2, 8];

answer = [];
for (let i = 0; i < 6; i++) {
  answer.push(criteria[i] - input[i]);
}

console.log(answer.join(" "));
