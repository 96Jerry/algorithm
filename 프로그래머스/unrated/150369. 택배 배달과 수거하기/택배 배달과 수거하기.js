function solution(cap, n, deliveries, pickups) {
  // 남은 배달, 픽업 개수
  let leftDeliver = deliveries.reduce((a, b) => a + b, 0);
  let leftPickup = pickups.reduce((a, b) => a + b, 0);

  // 정답 초기화
  let answer = 0;

  // 배달, 픽업할 상자가 남아있는 동안
  while (leftDeliver !== 0 || leftPickup !== 0) {
    // 배달, 픽업의 뒤에서 부터 0을 지움 (갈 이유가 없음)
    deleteZero(deliveries);
    deleteZero(pickups);

    // 정답에 이동하는 거리를 더해줌
    const maxDistance = Math.max(deliveries.length, pickups.length);
    answer += maxDistance * 2;

    // 처리한 집 0으로 만들고 총합에서 빼줌
    leftDeliver -= convertIntoZero(deliveries, cap);
    leftPickup -= convertIntoZero(pickups, cap);
  }

  return answer;
}

const deleteZero = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) arr.pop();
    else return;
  }
};

const convertIntoZero = (arr, cap) => {
  let numberOfConverted = 0;
  // 배열의 뒤에서 부터 반복
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= cap) {
      arr[i] -= cap;
      numberOfConverted += cap;
      break;
    } else {
      cap -= arr[i];
      numberOfConverted += arr[i];
      arr[i] = 0;
    }
  }
  return numberOfConverted;
};
