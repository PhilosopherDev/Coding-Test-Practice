# 구간 합 구하기 4
# https://www.acmicpc.net/problem/11659

import sys
input = sys.stdin.readline

t = list(map(int, input().split()))

arr = list(map(int, input().split()))
acc = [arr[0]]

for i in range(t[0]):
    if i > 0:
        acc.append(arr[i] + acc[i - 1])

for i in range(t[1]):
    start, end = list(map(lambda num: num - 1, map(int, input().split())))
    print(acc[end] - acc[start - 1]) if start !=0 else print(acc[end])