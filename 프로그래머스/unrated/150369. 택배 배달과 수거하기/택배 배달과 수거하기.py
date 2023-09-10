def solution(cap, n, deliveries, pickups):
    deliveries = deliveries[::-1]
    pickups = pickups[::-1]
    
    answer = 0
    haveto_deliver = 0
    haveto_pickup = 0
    for i in range(n):
        haveto_deliver += deliveries[i]
        haveto_pickup += pickups[i]
        
        while haveto_deliver > 0 or haveto_pickup > 0:
            haveto_deliver -= cap
            haveto_pickup -= cap
            answer += (n-i)*2
    return answer