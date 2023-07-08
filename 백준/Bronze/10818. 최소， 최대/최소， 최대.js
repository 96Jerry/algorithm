  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const arr = input
  .split("\n")[1]
  .split(" ")
  .map((el) => Number(el));

const a = Math.max(...arr);
const b = Math.min(...arr);

console.log(b, a);
