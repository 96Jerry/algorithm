def solution(cacheSize, cities):
    c = cacheSize
    n = len(cities)
    
    # 캐시가 없다면 5를 곱해서 리턴
    if c == 0:
        return 5 * n
    
    # cities 소문자로 바꿔주기
    for i in range(n):
        cities[i] = cities[i].lower()

    cache = []
    count = 0
    
    for city in cities:
        if city in cache:
            count += 1
            cache.remove(city)
        else:
            count += 5
        cache.append(city)
        if len(cache) > c:
            cache.pop(0)
            
    return count