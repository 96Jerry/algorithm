const fs = require("fs");

const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const croatias = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let count = 0;
for (const croatia of croatias) {
  if (input.includes(croatia)) {
    const result = input.match(new RegExp(croatia, "g"));
    count += result ? result.length : 0;
    input = input.replace(new RegExp(croatia, "g"), " ");
  }
}
input = input.replace(/ /g, "");
count += input.length;

console.log(count);
