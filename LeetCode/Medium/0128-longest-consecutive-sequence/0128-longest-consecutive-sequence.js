/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const map = new Map()
let longest = 0

for (const num of nums) {
  if (map.has(num)) continue

  const left = map.get(num - 1) || 0
  const right = map.get(num + 1) || 0
  const length = left + right + 1

  map.set(num, length)
  longest = Math.max(longest, length)

  map.set(num - left, length)
  map.set(num + right, length)
}

return longest

};