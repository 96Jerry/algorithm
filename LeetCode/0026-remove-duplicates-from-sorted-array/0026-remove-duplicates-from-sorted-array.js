/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const stack = [];

  for (const num of nums) {
    if (stack.length === 0 || stack[stack.length - 1] !== num) {
      stack.push(num);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = stack[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === undefined) {
      nums.splice(i);
    }
  }

  return stack.length;
};

// var removeDuplicates = function (nums) {
//   const stack = [1, 2, 3]; // 새 배열
//   nums = stack; // nums가 새 배열(stack)을 참조
//   console.log(nums); // [1, 2, 3] (stack과 동일)
// };

// const input = [1, 1, 2];
// removeDuplicates(input);
// console.log(input); // [1, 1, 2] (원본 배열은 바뀌지 않음)
