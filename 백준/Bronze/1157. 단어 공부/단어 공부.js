const fs = require("fs");

const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filepath).toString().trim().toLowerCase();

const alphabets = "abcdefghijklmnopqrstuvwxyz";

const hashAlphabet = new Map();
for (const alphabet of alphabets) {
  hashAlphabet.set(alphabet, 0);
}

for (const word of input) {
  hashAlphabet.set(word, hashAlphabet.get(word) + 1);
}

const maxValue = Math.max(...hashAlphabet.values());

const b = [...hashAlphabet.values()];
const result = b.indexOf(maxValue);
const answer = b.lastIndexOf(maxValue);

if (result !== answer) {
  console.log("?");
} else {
  console.log(alphabets[answer].toUpperCase());
}
