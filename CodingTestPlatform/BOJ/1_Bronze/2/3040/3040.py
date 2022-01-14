# 백설 공주와 일곱 난쟁이
# https://www.acmicpc.net/problem/3040

from itertools import combinations
import sys
input = sys.stdin.readline
for i in combinations([int(input()) for _ in range(9)], 7):
    if sum(i) == 100:
        for j in sorted(i):
            print(j)
        break