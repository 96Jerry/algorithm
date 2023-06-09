def solution(m, n, board):
    count = 0
    while True:
        is_same = []
        for i in range(m-1):
            for j in range(n-1):
                if board[i][j] == board[i+1][j] == board[i][j+1] == board[i+1][j+1] and 65 <= ord(board[i][j]) <= 90:
                    is_same.append((i,j))
        if not is_same:
            break

        for i in range(m):
            board[i] = list(board[i])
        for i, j in is_same:
            board[i][j] = ""
            board[i][j+1] = ""
            board[i+1][j] = ""
            board[i+1][j+1] = ""

        columns = []
        for i in range(n):
            temp = ''
            for j in range(m):
                temp += board[j][i]
            columns.append(temp)
        
        for i in range(n):
            zero_number = m - len(columns[i])
            columns[i] = " " * zero_number + columns[i]

        for i in range(m):
            for j in range(n):
                board[i][j] = columns[j][i]
                
    for i in range(m):
        for j in range(n):
            if board[i][j] == " ":
                count += 1
    return count