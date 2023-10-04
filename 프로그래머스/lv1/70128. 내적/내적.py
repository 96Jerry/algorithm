def solution(a, b):
    
    sum = 0
    
    for i, j in zip(a,b):
        sum += i*j
        
    return sum