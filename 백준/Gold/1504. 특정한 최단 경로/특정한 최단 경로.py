import sys
import heapq

input = sys.stdin.readline
INF = float('inf')

def dijkstra(start, graph, N):
    distances = [INF] * (N + 1)
    distances[start] = 0
    heap = [(0, start)]  # (거리, 정점)
    
    while heap:
        current_dist, current_node = heapq.heappop(heap)
        
        if distances[current_node] < current_dist:
            continue
        
        for adj_node, w in graph[current_node]:
            distance = current_dist + w
            if distances[adj_node] > distance:
                distances[adj_node] = distance
                heapq.heappush(heap, (distance, adj_node))
    
    return distances

def solve():
    N, E = map(int, input().split())
    graph = [[] for _ in range(N + 1)]
    
    for _ in range(E):
        a, b, c = map(int, input().split())
        # 무향 그래프이므로 양쪽에 다 추가
        graph[a].append((b, c))
        graph[b].append((a, c))
    
    v1, v2 = map(int, input().split())
    
    # 1, v1, v2 에서 각각 다익스트라 실행
    dist_from_1 = dijkstra(1, graph, N)
    dist_from_v1 = dijkstra(v1, graph, N)
    dist_from_v2 = dijkstra(v2, graph, N)
    
    # 1 -> v1 -> v2 -> N
    # 1 -> v2 -> v1 -> N
    path1 = dist_from_1[v1] + dist_from_v1[v2] + dist_from_v2[N]
    path2 = dist_from_1[v2] + dist_from_v2[v1] + dist_from_v1[N]
    
    answer = min(path1, path2)
    
    if answer >= INF:
        print(-1)
    else:
        print(answer)

solve()
