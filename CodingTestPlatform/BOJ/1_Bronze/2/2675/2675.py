# 문자열 반복
# https://www.acmicpc.net/problem/2675

t = int(input())
for i in range(t):
    num, s = input().split()
    text = ''
    for c in s:
        text += int(num) * c
    print(text)