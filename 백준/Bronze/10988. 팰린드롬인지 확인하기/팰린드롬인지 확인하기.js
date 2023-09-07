const fs = require("fs");

const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const a = [...input].reverse().join("");

if (input === a) {
  console.log(1);
} else {
  console.log(0);
}
