# 절대값 힙
# https://www.acmicpc.net/problem/11286

import heapq
import sys

input = sys.stdin.readline

N = int(input().rstrip())
heap = []

for _ in range(N):
    num = int(input().rstrip())
    if num == 0:
        if len(heap) > 0:
            print(heapq.heappop(heap)[1])
        else:
            print(0)
    else:
        heapq.heappush(heap, (abs(num), num))

