# 회의실 배정
# https://www.acmicpc.net/problem/1931

import sys
input = sys.stdin.readline

N = int(input().rstrip())
L = []
for i in range(N):
    start, end = list(map(int, input().rstrip().split()))
    L.append((start, end))

L.sort(key=lambda n: (n[1], n[0]))
ans = 0
t = 0
for j in range(N):
    if t == 0 or t <= L[j][0]:
        t = L[j][1]
        ans += 1

print(ans)