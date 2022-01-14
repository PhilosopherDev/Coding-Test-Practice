# 에디터
# https://www.acmicpc.net/problem/1406

from collections import deque
import sys

input = sys.stdin.readline
s = deque([i for i in input().rstrip()])
t = deque([])
M = int(input().rstrip())

for i in range(M):
    command = input().split()
    if command[0] == 'L':
        if len(s) > 0:
            t.appendleft(s.pop())
    elif command[0] == 'D':
        if len(t) > 0:
            s.append(t.popleft())
    elif command[0] == 'B':
        if len(s) > 0:
            s.pop()
    elif command[0] == 'P':
        s.append(command[1])

print(''.join(s + t))
