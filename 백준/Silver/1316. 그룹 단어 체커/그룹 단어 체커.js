const fs = require("fs");

const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const checkGroup = (word) => {
  const storage = new Map();
  const words = [...word];
  let answer = 1;
  for (let i = 0; i < words.length; i++) {
    // words[i]가 storage에 없으면 추가
    if (!storage.get(words[i])) {
      storage.set(words[i], 1);
    }
    // words[i]가 storage에 있으면 words[i-1]이랑 같으면 패스, 다르면 에러
    else {
      if (words[i - 1] === words[i]) {
        answer = 1;
      } else {
        return 0;
      }
    }
  }
  return answer;
};

let count = 0;
for (let i = 1; i < Number(input[0]) + 1; i++) {
  count += checkGroup(input[i]);
}

console.log(count);
