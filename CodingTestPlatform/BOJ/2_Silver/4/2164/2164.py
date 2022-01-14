# 카드2
# https://www.acmicpc.net/problem/2164

from collections import deque
import sys
input = sys.stdin.readline

N = int(input().rstrip())
q = deque(i for i in range(1, N+1))

for _ in range(N-1):
    q.popleft()
    q.rotate(-1)

print(q[0])