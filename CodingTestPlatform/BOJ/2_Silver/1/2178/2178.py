# 미로 탐색
# https://www.acmicpc.net/problem/2178

from collections import deque

dy = (0, 1, 0, -1)
dx = (-1, 0, 1, 0)
N, M = map(int, input().split())
adj = [input() for _ in range(N)]
chk = [[False] * M for _ in range(N)]
ans = 0


def is_valid_coord(y, x):
    return 0 <= y < N and 0 <= x < M


q = deque()
chk[0][0] = True
q.append((0, 0, 1))

while len(q):
    y, x, ans = q.popleft()
    if y == N - 1 and x == M - 1:
        print(ans)
        break

    for k in range(4):
        ny = y + dy[k]
        nx = x + dx[k]
        if is_valid_coord(ny, nx) and adj[ny][nx] == '1' and not chk[ny][nx]:
            chk[ny][nx] = True
            q.append((ny, nx, ans + 1))
