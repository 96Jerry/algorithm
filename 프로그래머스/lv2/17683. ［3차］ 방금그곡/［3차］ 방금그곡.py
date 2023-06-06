def time_gap(a,b):
    # 23:45 ~ 00:10
    # 22:40 ~ 23:10
    a = list(map(int, a.split(":")))
    b = list(map(int, b.split(":")))
    a_time = a[0]*60 + a[1]
    b_time = b[0]*60 + b[1]
    return b_time - a_time
    
    
    
def solution(m, musicinfos):
    # m: 기억한 멜로디, musicinfos: 음악정보들
    # 각 음악들을 재생시간에 맞춰서 늘림
    # 멜로디가 음악정보안에 있다면 음악제목을 반환
    # c#, ... 등을 하나의 다른 문자로 변환
    # c# -> h, d# -> i, f# -> j, g# -> k, a# -> l
    answer = []
    m = m.replace("C#","H")
    m = m.replace("D#","I")
    m = m.replace("F#","J")
    m = m.replace("G#","K")
    m = m.replace("A#","L")
    for musicinfo in musicinfos:
        musicinfo = musicinfo.split(",")
        musicinfo[3] = musicinfo[3].replace("C#","H")
        musicinfo[3] = musicinfo[3].replace("D#","I")
        musicinfo[3] = musicinfo[3].replace("F#","J")
        musicinfo[3] = musicinfo[3].replace("G#","K")
        musicinfo[3] = musicinfo[3].replace("A#","L")
        
        total_playtime = time_gap(musicinfo[0], musicinfo[1])
        music_playtime = len(musicinfo[3])
        n, d = divmod(total_playtime,music_playtime)
        music_array = musicinfo[3]*n + musicinfo[3][:d]
        if m in music_array:
            answer.append([musicinfo[2], total_playtime])
    print(answer)
    answer.sort(key=lambda x:x[1],reverse=True)
    if not answer:
        return "(None)"
    return answer[0][0]