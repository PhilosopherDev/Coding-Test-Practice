# 회사에 있는 사람
# https://www.acmicpc.net/problem/7785

import sys
input = sys.stdin.readline

n = int(input().rstrip())
hl = set([])

for _ in range(n):
    name, state = input().split()
    if state == "enter":
        hl.add(name)
    elif state == "leave":
        hl.remove(name)

rst = list(hl)
rst.sort(reverse=True)
print('\n'.join(rst))