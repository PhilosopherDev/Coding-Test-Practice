# 큐
# https://www.acmicpc.net/problem/10845

from collections import deque
import sys
input = sys.stdin.readline


class Queue:
    def __init__(self):
        self.q = deque([])

    def push(self, v):
        self.q.append(v)

    def pop(self):
        if len(self.q) == 0:
            return -1
        else:
            return self.q.popleft()

    def size(self):
        return len(self.q)

    def empty(self):
        if len(self.q) == 0:
            return 1
        else:
            return 0

    def front(self):
        if len(self.q) == 0:
            return -1
        else:
            return self.q[0]

    def back(self):
        if len(self.q) == 0:
            return -1
        else:
            return self.q[len(self.q) - 1]


N = int(input().rstrip())
q = Queue()
for i in range(N):
    c = input().rstrip().split()
    if c[0] == 'push':
        q.push(c[1])
    elif c[0] == 'pop':
        print(q.pop())
    elif c[0] == 'size':
        print(q.size())
    elif c[0] == 'empty':
        print(q.empty())
    elif c[0] == 'front':
        print(q.front())
    elif c[0] == 'back':
        print(q.back())
