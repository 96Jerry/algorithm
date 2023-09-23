from itertools import combinations as cb
from collections import defaultdict

orders = ["ABCFG", "CA", "CDE", "ACDE", "BCFG", "ACDEH"]
course = [2,3,4]

# def solution(orders, course):
#     for _ in range(len(orders)):
#         orders[_] = sorted(list(orders[_]))
#     x = []
#     dict1 = {}
#     for _ in range(len(orders)):
#         a = list(cb(orders[_],course[0]))
#         dict1[_] = a
#     print(dict1)
#     for i in range()
#     for j in range()
#     dict1[1].count(dict1[0][0])
#     dict2 = {}
#     cnt = 0
#     for i in dict[0]:
#         if i[0] in dict[1]:
#             cnt+=1
from itertools import combinations

def solution(orders, course):
    answer = []
    for k in course:
        candidates = []
        new_menu = {}
        for menu in orders:
            menu_li = list(''.join(menu))
            for li in combinations(menu_li, k):
                res = ''.join(sorted(li))
                if res not in candidates:
                    candidates.append(res)
                else:
                    if res not in new_menu.keys():
                        new_menu[res] = 2
                    else:
                        new_menu[res] += 1
        sort_menu = sorted(new_menu.items(), key=lambda x:[len(x[0]), x[1]])
        if len(sort_menu):
            now = course[-1]
            maxi = sort_menu[-1][1]
        while sort_menu:
            menu, cnt = sort_menu.pop()
            if len(menu) == now and cnt >= maxi:
                answer.append(menu)
            elif len(menu) != now:
                now = len(menu)
                maxi = cnt
                answer.append(menu)
    return sorted(answer)