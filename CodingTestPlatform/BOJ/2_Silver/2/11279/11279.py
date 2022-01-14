# 최대 힙
# https://www.acmicpc.net/problem/11279

import sys
import heapq

input = sys.stdin.readline
N = int(input().rstrip())
heap = []

for _ in range(N):
    n = int(input().rstrip())
    if n == 0:
        print(0) if len(heap) == 0 else print(heapq.heappop(heap)[1])
    else:
        heapq.heappush(heap, (-n, n))