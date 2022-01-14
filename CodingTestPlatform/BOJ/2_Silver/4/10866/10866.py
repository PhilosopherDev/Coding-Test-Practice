# 덱
# https://www.acmicpc.net/problem/10866

from collections import deque
import sys
input = sys.stdin.readline


class Deque:
    def __init__(self):
        self.d = deque([])

    def push_front(self, v):
        self.d.appendleft(v)

    def push_back(self, v):
        self.d.append(v)

    def pop_front(self):
        return self.d.popleft() if len(self.d) else -1

    def pop_back(self):
        return self.d.pop() if len(self.d) else -1

    def size(self):
        return len(self.d)

    def empty(self):
        return 0 if len(self.d) else 1

    def front(self):
        return self.d[0] if len(self.d) else -1

    def back(self):
        return self.d[len(self.d) - 1] if len(self.d) else -1


d = Deque()
N = int(input().rstrip())

for i in range(N):
    c = input().split()
    if c[0] == 'push_front':
        d.push_front(c[1])
    elif c[0] == 'push_back':
        d.push_back(c[1])
    elif c[0] == 'pop_front':
        print(d.pop_front())
    elif c[0] == 'pop_back':
        print(d.pop_back())
    elif c[0] == 'size':
        print(d.size())
    elif c[0] == 'empty':
        print(d.empty())
    elif c[0] == 'front':
        print(d.front())
    elif c[0] == 'back':
        print(d.back())