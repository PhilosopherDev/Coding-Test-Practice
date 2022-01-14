# 연결 요소의 개수
# https://www.acmicpc.net/problem/11724

import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

N, M = map(int, input().split())
adj = [[False] * (N + 1) for _ in range(N + 1)]

for i in range(M):
    u, v = map(int, input().split())
    adj[u][v] = True
    adj[v][u] = True

answer = 0
chk = [False] * (N + 1)


def dfs(i):
    for j in range(1, N + 1):
        if adj[i][j] and not chk[j]:
            chk[j] = True
            dfs(j)


for i in range(1, N + 1):
    if not chk[i]:
        answer += 1
        chk[i] = True
        dfs(i)

print(answer)
