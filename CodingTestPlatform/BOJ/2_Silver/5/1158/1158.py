# 요세푸스 문제
# https://www.acmicpc.net/problem/1158

from collections import deque
import sys
input = sys.stdin.readline

N, K = map(int, input().split())
q = deque([i for i in range(1, int(N) + 1)])
rst = []

for i in range(N):
    while len(q):
        q.rotate(-K+1)
        rst.append(q.popleft())

s = ', '.join(map(str, rst))
print(f'<{s}>')