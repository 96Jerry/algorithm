# back-tracking

n = int(input())

def solution(n):

    cases = [0]

    def dfs(queens, next_queen):
        # 같은 행이면 분기
        if next_queen in queens:
            return
        # 같은 대각선이면 분기
        for row, column in enumerate(queens):
            h = len(queens) - row
            if next_queen == column + h or next_queen == column - h:
                return
        queens.append(next_queen)
        if len(queens) == n:
            cases[0] += 1
            return
        for next_queen in range(n):
            dfs(queens[:], next_queen)
    
    for next_queen in range(n):
        queens = []
        dfs(queens,next_queen)
    return cases[0]

print(solution(n))