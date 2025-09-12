function combinationPickTwoElements(arr) {
  const answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      answer.push([arr[i], arr[j]]);
    }
  }

  return answer;
}

function solution(friends, gifts) {
  const friendReceiveCountDict = new Map();
  friends.forEach((friend) => friendReceiveCountDict.set(friend, 0));

  // 선물 지수 계산
  const friendGiveAndReceiveDict = new Map();
  friends.forEach((friend) => friendGiveAndReceiveDict.set(friend, [0, 0]));
  gifts.forEach((gift) => {
    const giver = gift.split(" ")[0];
    const receiver = gift.split(" ")[1];
    friendGiveAndReceiveDict.set(giver, [
      friendGiveAndReceiveDict.get(giver)[0],
      friendGiveAndReceiveDict.get(giver)[1] + 1,
    ]);
    friendGiveAndReceiveDict.set(receiver, [
      friendGiveAndReceiveDict.get(receiver)[0] + 1,
      friendGiveAndReceiveDict.get(receiver)[1],
    ]);
  });

  // 선물 지수 설정
  const giftPointDict = new Map();
  friends.forEach((friend) =>
    giftPointDict.set(
      friend,
      friendGiveAndReceiveDict.get(friend)[1] -
        friendGiveAndReceiveDict.get(friend)[0]
    )
  );

  // 콤비네이션 friends C 2 를 돌면서 선물을 받을 사람을 정함, 개수가 같으면 선물 지수 비교
  const combinations = combinationPickTwoElements(friends);
  for (const combination of combinations) {
    const friend1 = combination[0];
    const friend2 = combination[1];

    let friend1Count = 0;
    let friend2Count = 0;
    for (const gift of gifts) {
      const giver = gift.split(" ")[0];
      const receiver = gift.split(" ")[1];

      if (giver === friend1 && receiver === friend2) {
        friend1Count++;
      } else if (giver === friend2 && receiver === friend1) {
        friend2Count++;
      }
    }

    if (friend1Count > friend2Count) {
      friendReceiveCountDict.set(
        friend1,
        friendReceiveCountDict.get(friend1) + 1
      );
    } else if (friend1Count < friend2Count) {
      friendReceiveCountDict.set(
        friend2,
        friendReceiveCountDict.get(friend2) + 1
      );
    } else {
      // 선물 지수 비교
      const friend1Point = giftPointDict.get(friend1);
      const friend2Point = giftPointDict.get(friend2);

      if (friend1Point > friend2Point) {
        friendReceiveCountDict.set(
          friend1,
          friendReceiveCountDict.get(friend1) + 1
        );
      } else if (friend1Point < friend2Point) {
        friendReceiveCountDict.set(
          friend2,
          friendReceiveCountDict.get(friend2) + 1
        );
      } else {
        continue;
      }
    }
  }

  return Math.max(...friendReceiveCountDict.values());
}
