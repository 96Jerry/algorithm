import sys

n = int(sys.stdin.readline())
numbers = list(map(int, sys.stdin.readline().split()))


numbers.sort()
good_count = 0

for i in range(n):
    left = 0
    right = n - 1

    while left < right:
        if left == i:
            left += 1
            continue
        if right == i:
            right -= 1
            continue

        sum_number = numbers[left] + numbers[right]

        if sum_number == numbers[i]:
            good_count += 1
            break
        elif sum_number < numbers[i]:
            left += 1
        else:
            right -= 1


print(good_count)
