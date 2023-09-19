import math

def solution(fees, records):
    x = []
    dict = {}
    for record in records:
        x.append((record.split()[1],record.split()[0]))
    for i,j in x:
        if i not in dict.keys():
            dict[i]=[j]
        else:
            dict[i].append(j)
    for i in dict.keys():
        if len(dict[i]) % 2 == 1:
            dict[i].append('23:59')
            

    def timeCal(x,y):
        
        xHour = int(x.split(":")[0])
        xMinute = int(x.split(":")[1])
        xtime = xHour*60+xMinute
        yHour = int(y.split(":")[0])
        yMinute = int(y.split(":")[1])
        ytime = yHour*60+yMinute
    
        time = ytime-xtime
        return time
    print(dict)
    
    for i in dict.keys():
        N = len(dict[i])
        totalTime=0
        while N>0:
            totalTime += timeCal(dict[i][N-2],dict[i][N-1])
            N -= 2
        dict[i]=totalTime
    print(dict)
    for i in dict.keys():
        if dict[i] > fees[0]:
            dict[i] = fees[1] + math.ceil((dict[i] - fees[0])/fees[2])*fees[3]
        else:
            dict[i] = fees[1]
    print(dict)
    x = sorted(dict.items())
    answer = []
    for i,j in x:
        answer.append(j)
        
    return answer