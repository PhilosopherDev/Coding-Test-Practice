# 요세푸스 문제 0
# https://www.acmicpc.net/problem/11866

import sys
input = sys.stdin.readline

N, K = map(int, input().rstrip().split())

circle = [i + 1 for i in range(N)]
idx = 0
rst = []

for _ in range(N):
    idx += K - 1
    idx %= len(circle)    
    rst.append(circle.pop(idx))

print(f"<{', '.join(map(str, rst))}>")