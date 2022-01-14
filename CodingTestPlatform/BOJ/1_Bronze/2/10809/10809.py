# 알파벳 찾기
# https://www.acmicpc.net/problem/10809

import sys
input = sys.stdin.readline

S = input().rstrip()
A = [-1] * 26

for i in range(97, 123):
    A[i - 97] = S.find(chr(i))

for j in A:
    print(j, end=" ")
