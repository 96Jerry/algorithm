function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const set = new Set(arr);
  const uniqArr = [...set]; // 중복 제거
  
  const dict = {}; // {중복 횟수 : 해당 원소들} 딕셔너리 생성
  for (const uniqVal of uniqArr) {
    const count = arr.filter((arrVal) => arrVal === uniqVal).length;

    if (dict[count] === undefined) {
      dict[count] = new Set([uniqVal]);
      continue;
    }

    dict[count].add(uniqVal);
  }

  Object.keys(dict).forEach((key) => (dict[key] = [...dict[key]]));

  switch (uniqArr.length) {
    case 1: // 모두 같을 경우
      return a * 1111;
          
    case 2:
      if (Object.keys(dict).includes("3")) { // 1,1,2,1 의 경우
        return (10 * Number(dict[3]) + Number(dict[1])) ** 2;
      } else { // 1,1,2,2 의 경우
        const x = Number(uniqArr[0]);
        const y = Number(uniqArr[1]);
        return (x + y) * Math.abs(x - y);
      }
          
    case 3: // 1,2,3,1 의 경우
      return Number(dict[1][0]) * Number(dict[1][1]);
          
    case 4: // 모두 다를 경우
      return Math.min(...arr);
          
    default:
      return;
  }
}
