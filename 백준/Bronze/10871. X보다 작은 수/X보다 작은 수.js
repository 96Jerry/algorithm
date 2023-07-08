const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();


const arr1 = input.split("\n");

const arr2 = arr1[1];

const n = Number(arr1[0].split(" ")[1]);

const arr = arr2.split(" ").map((el) => Number(el));

const result = arr.filter((el) => el < n);
console.log(result.join(' '));
