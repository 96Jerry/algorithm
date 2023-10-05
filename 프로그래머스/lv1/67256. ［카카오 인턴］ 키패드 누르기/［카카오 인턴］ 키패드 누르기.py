#numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
#hand = "right"

# return "LRLLLRLLRRL"
def tupleadd(x,y):
    z = []
    for i, j in zip(x,y):
        z.append(i-j)
    return z


def solution(numbers,hand):
    keypad = {
        1:(0,3),2:(1,3),3:(2,3),
        4:(0,2),5:(1,2),6:(2,2),
        7:(0,1),8:(1,1),9:(2,1),
                0:(1,0)
    }
    l = (0,0)
    r = (2,0)
    answer = ''
    for number in numbers:

        x = keypad[number]
        if number in [0,2,5,8]:
            l_distance = tupleadd(x,l)
            l_distance = abs(l_distance[0]) + abs(l_distance[1])
            r_distance = tupleadd(x,r)
            r_distance = abs(r_distance[0]) + abs(r_distance[1])
            if l_distance < r_distance:
                l = x
                answer += 'L'
            elif l_distance > r_distance:
                r = x
                answer += 'R'
            else:
                if hand == 'right':
                    r = x
                    answer += 'R'
                else:
                    l = x
                    answer += 'L'
        elif number in [1,4,7]:
            answer += 'L'
            l = x
        elif number in [3,6,9]:
            answer += 'R'
            r = x
    return answer