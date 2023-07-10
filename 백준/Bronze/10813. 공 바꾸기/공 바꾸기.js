const fs = require('fs');

let input = fs
  .readFileSync('dev/stdin', 'utf8')
  .toString()
  .trim()
  .split('\n');
const n = +input[0].split(' ')[0];
const arr = Array.from({ length: n }, (a, i) => i + 1);

let a, temp;
input.slice(1).forEach((el) => {
  a = el.split(' ').map((el) => el - 1);
  temp = arr[a[0]];
  arr[a[0]] = arr[a[1]];
  arr[a[1]] = temp;
});

console.log(arr.join(' '));
