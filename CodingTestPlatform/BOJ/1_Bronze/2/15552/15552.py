# 빠른 A+B
# https://www.acmicpc.net/problem/15552

import sys
input = sys.stdin.readline

cnt = int(input().rstrip())

for i in range(cnt):
    num1, num2 = map(int, input().split())
    print(num1 + num2)