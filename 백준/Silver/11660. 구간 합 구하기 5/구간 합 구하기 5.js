const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

// (1) 원본 배열 만들기
let arr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  const row = input[i].split(" ").map(Number);
  for (let j = 1; j <= n; j++) {
    arr[i][j] = row[j - 1];
  }
}

// (2) 누적합 배열 만들기
let prefix = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    prefix[i][j] =
      prefix[i - 1][j] +
      prefix[i][j - 1] -
      prefix[i - 1][j - 1] +
      arr[i][j];
  }
}

// (3) 쿼리 처리
let lineIndex = 1 + n;

for (let i = 0; i < m; i++) {
  let [a, b, c, d] = input[lineIndex + i].split(" ").map(Number);

  let sum =
    prefix[c][d]
    - prefix[a - 1][d]
    - prefix[c][b - 1]
    + prefix[a - 1][b - 1];

  console.log(sum);
}