let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const n = Number(input);

// 1
// 2 ~ 7 6개
// 8 ~ 19 12개
// 20 ~ 37 18개
// ...

// 13은 3번 째 그룹에 존재. answer = 3
// n은 10억까지 가능
// 6으로 나눠서 몫이 뭐가 나오는지. 0이면 첫번째, 1, 2이면 세번째, 3,4,5면 네번째, ... 몫이 몇 번째 그룹인지 확인

const getAnswer = () => {
  if (n === 1) {
    return 1;
  }

  let x = Math.floor((n - 2) / 6) + 1;

  let groupNum = 1;
  let i = 1;
  while (true) {
    x -= i;
    if (x <= 0) break;

    groupNum++;
    i++;
  }

  return groupNum + 1;
};

const answer = getAnswer();
console.log(answer);
