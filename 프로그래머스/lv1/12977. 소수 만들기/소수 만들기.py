from itertools import combinations as cb

def solution(nums):
    a = [1] * (3001)
    a[1] = 0
    for i in range(2,3001):
        j=2
        if a[i] == 1:
            while i*j <= 3000:
                a[i*j] = 0
                j += 1
    
    n = list(cb(nums,3))
    cnt = 0
    x = map(sum,n)
    for i in x:
        if a[i] == 1:
            cnt+=1
    return cnt