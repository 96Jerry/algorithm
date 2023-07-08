const fs = require('fs');

let input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim();

const n = Number(input.split('\n')[0].split(' ')[0]);

let arr = new Array(n);

for (let i = 0; i < n; i++) {
  arr[i] = 0;
}

let y = input.split('\n');

for (let m = 1; m < y.length; m++) {
  let el = y[m];
  let i = Number(el.split(' ')[0]);
  let j = Number(el.split(' ')[1]);
  let x = Number(el.split(' ')[2]);
  for (let k = i; k < j + 1; k++) {
    arr[k - 1] = x;
  }
}

console.log(arr.join(' '));
