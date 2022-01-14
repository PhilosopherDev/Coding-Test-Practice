# 사탕 게임
# https://www.acmicpc.net/problem/3085

import sys
input = sys.stdin.readline
N = int(input().rstrip())
ans = 1
DL = [list(input().rstrip()) for _ in range(N)]


def validate_row(x):
    # 행 확인
    global ans
    cnt = 1
    for i in range(1, N):
        if DL[x][i - 1] == DL[x][i]:
            cnt += 1
            ans = max(ans, cnt)
        else:
            cnt = 1


def validate_col(y):
    # 열 확인
    global ans
    cnt = 1
    for i in range(1, N):
        if DL[i-1][y] == DL[i][y]:
            cnt += 1
            ans = max(ans, cnt)
        else:
            cnt = 1


for i in range(N):
    for j in range(N):
        if j < N-1:
            # 행 바꾸기
            DL[i][j], DL[i][j + 1] = DL[i][j + 1], DL[i][j]
            validate_row(i)
            validate_col(j)
            validate_col(j + 1)
            DL[i][j], DL[i][j + 1] = DL[i][j + 1], DL[i][j]

        if i < N-1:
            # 열 바꾸기
            DL[i][j], DL[i + 1][j] = DL[i + 1][j], DL[i][j]
            validate_row(i)
            validate_row(i + 1)
            validate_col(j)
            DL[i][j], DL[i + 1][j] = DL[i + 1][j], DL[i][j]


print(ans)