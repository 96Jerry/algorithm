let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let totalMax = -1;
let totalPositionX = -1;
let totalPositionY = -1;
for (let i = 0; i < 9; i++) {
  const line = [...input[i].split(" ").map(Number)];

  const max = Math.max(...line);
  const positionX = line.indexOf(max);
  const positionY = i;

  totalMax = Math.max(totalMax, max);
  if (totalMax === max) {
    totalPositionX = positionX;
    totalPositionY = positionY;
  }
}

console.log(totalMax);
console.log(totalPositionY + 1, totalPositionX + 1);
