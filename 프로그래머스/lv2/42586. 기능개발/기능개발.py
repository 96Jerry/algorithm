from math import ceil

def solution(progresses, speeds):
    days=[]
    for i,j in zip(progresses,speeds):
        days.append(ceil((100-i)/j))
    answer=[]    
    print(days)
    stack=[days.pop(0)]
    while days:
        if stack[0] >= days[0]:
            stack.append(days.pop(0))
        else:
            answer.append(len(stack))
            stack=[days.pop(0)]
    answer.append(len(stack))
    return answer