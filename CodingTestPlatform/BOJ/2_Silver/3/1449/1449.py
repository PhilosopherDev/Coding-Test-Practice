# 수리공 항승
# https://www.acmicpc.net/problem/1449

import sys
input = sys.stdin.readline

N, L = list(map(int, input().rstrip().split()))
P = list(map(int, input().split()))
P.sort()
end = 0
ans = 0
for i in P:
    if end < i:
        end = (i + L - 0.5)
        ans += 1

print(ans)