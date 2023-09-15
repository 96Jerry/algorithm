function permutation(arr, length) {
  const result = [];

  function generatePermutations(currentPermutation) {
    if (currentPermutation.length === length) {
      result.push(currentPermutation.slice());
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      currentPermutation.push(arr[i]);
      generatePermutations(currentPermutation);
      currentPermutation.pop();
    }
  }

  generatePermutations([]);
  return result;
}

// 최대한으로 할인하면 오히려 구입 금액이 낮아질 수도 있다.
// ex) 조금밖에 할인 안해도 사는데 할인을 많이 할 때
// 하지만 너무 할인을 안하면 아예 안사게 됨.
// 적절하게 가장 많이 플러스에 가입할 때를 찾으면 됨
// 할인율 낮은 사람에게는 낮게해서 판매, 높은 사람한테는 높게 해서 판매
// 모든 경우를 살피면 16384개의 경우의 수가 나옴
// 각각의 경우의 수에 대해 100명의 유저를 for문 돌림
// 163만 8400가지

const solution = (users, emoticons) => {
  const m = emoticons.length;
  let info = [];
  let count;
  let totalPrice;
  let sumPrice;

  // 중복 순열로 올 수 있는 배치를 찾음
  // 배치에 대해서
  for (const combination of permutation([40, 30, 20, 10], m)) {
    count = 0;
    sumPrice = 0;

    users.forEach((user) => {
      totalPrice = 0;
      const percentCriteria = user[0];
      const priceCriteria = user[1];
      for (let i = 0; i < m; i++) {
        if (percentCriteria > combination[i]) {
          continue;
        }
        const price = emoticons[i] * ((100 - combination[i]) / 100);
        totalPrice += price;
      }
      if (totalPrice >= priceCriteria) {
        totalPrice = 0;
        count += 1;
      }
      sumPrice += totalPrice;
    });
    info.push([count, sumPrice]);
  }
  // 각각의 유저가 플러스에 가입하는지 안하는지 확인해서 가입자 수 확인
  // 모든 경우에 대해 가입자 수가 제일 많은 경우 확인
  // 모든 경우에 대해 매출액도 항상 계산 -> 가입자 수가 같으면 매출액 비교
  let maxVal = 0;
  let maxSell = 0;
  info.forEach((el) => {
    if (maxVal < el[0]) {
      maxVal = el[0];
      maxSell = el[1];
    } else if (maxVal === el[0] && maxSell < el[1]) {
      maxSell = el[1];
    }
  });
  return [maxVal, maxSell];
};