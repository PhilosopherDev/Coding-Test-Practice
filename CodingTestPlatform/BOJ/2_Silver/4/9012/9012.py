# 괄호
# https://www.acmicpc.net/problem/9012

import sys
input = sys.stdin.readline

cnt = int(input().rstrip())

for i in range(cnt):
    s = input().rstrip()
    stk = []
    chk = True
    for j in s:
        if j == "(":
            stk.append(1)
        elif j == ")":
            rst = stk.pop() if len(stk) > 0 else -1
            if rst != 1:
                chk = False
                break
    if chk is True and len(stk) == 0:
        print("YES")
    else:
        print("NO")