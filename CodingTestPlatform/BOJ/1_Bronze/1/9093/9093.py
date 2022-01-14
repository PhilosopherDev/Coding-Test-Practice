# 단어 뒤집기
# https://www.acmicpc.net/problem/9093

import sys
input = sys.stdin.readline

cnt = int(input().rstrip())
for i in range(cnt):
    s = input().rstrip().split()
    rst = []
    for j in s:
        rst.append(j[::-1])
    print(' '.join(rst))