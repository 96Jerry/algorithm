def solution(msg):
    # 1. 길이가 1인 모든 단어 사전을 초기화
    alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    a_dict = {alphabet: i for i, alphabet in enumerate(alphabets, start=1)}
    next_index = len(a_dict) + 1

    answer = []
    # 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 찾기
    while len(msg) > 0:
        for i in range(len(msg), 0, -1):
            if msg[:i] in a_dict:
                break
        w = msg[:i]
        answer.append(a_dict[w])
        msg = msg[i:]
        if len(msg) > 0:
            c = msg[0]
            a_dict[w+c] = next_index
            next_index += 1
    return answer
