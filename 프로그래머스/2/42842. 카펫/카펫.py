def solution(brown, yellow):
    total_factor = factor(brown+yellow)
    yellow_factor = factor(yellow)
    
    for j in total_factor:
        total_width = (brown+yellow) / j
        total_length = j
        if total_width < total_length :
            continue
        for k in yellow_factor:
            yellow_width = yellow / k
            yellow_length = k
            if yellow_width < yellow_length:
                continue
            if total_length - yellow_length == 1:
                continue
            if yellow_width < total_width and yellow_length < total_length:
                return [total_width,total_length]
            
        

def factor(x):
    factor=[]
    for i in range(1,x+1):
        if x%i == 0:
            factor.append(i)
    return factor