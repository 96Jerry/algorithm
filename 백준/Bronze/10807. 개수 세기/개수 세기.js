const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const arr = input.split("\n");

const arr2 = arr[1].split(" ");

let count = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === arr[2]) {
    count++;
  }
}

const result = count;
console.log(result);