# 일곱 난쟁이
# https://www.acmicpc.net/problem/2309


from itertools import combinations
import sys
input = sys.stdin.readline

for i in combinations([int(input().rstrip()) for _ in range(9)], 7):
    if sum(i) == 100:
        j = sorted(i)
        print('\n'.join(map(str, j)))
        break

