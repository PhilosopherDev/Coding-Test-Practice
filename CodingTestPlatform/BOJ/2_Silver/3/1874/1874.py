# 스택 수열
# https://www.acmicpc.net/problem/1874

import sys
input = sys.stdin.readline

n = int(input().rstrip())

stk = [0]
rst = []
cnt = 1
chk = True
for i in range(n):
    v = int(input().rstrip())
    top = stk[len(stk)-1]
    if v >= cnt:
        for j in range(v - cnt + 1):
            stk.append(cnt)
            rst.append('+')
            cnt += 1
        stk.pop()
        rst.append('-')
    elif v == top:
        rst.append('-')
        stk.pop()
    else:
        chk = False
        break

if chk:
    print('\n'.join(rst))
else:
    print("NO")