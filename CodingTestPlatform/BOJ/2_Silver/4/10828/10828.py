# 스택
# https://www.acmicpc.net/problem/10828

import sys
input = sys.stdin.readline


class Stack:
    def __init__(self):
        self.stk = []

    def push(self, val):
        self.stk.append(val)

    def pop(self):
        return -1 if len(self.stk) == 0 else self.stk.pop()

    def size(self):
        return len(self.stk)

    def empty(self):
        return 1 if len(self.stk) == 0 else 0

    def top(self):
        return -1 if len(self.stk) == 0 else self.stk[len(self.stk) - 1]


cnt = int(input().rstrip())
si = Stack()

for i in range(cnt):
    cl = input().rstrip().split()
    command = cl[0]
    if command == 'push':
        si.push(cl[1])
    elif command == 'pop':
        print(si.pop())
    elif command == 'size':
        print(si.size())
    elif command == 'empty':
        print(si.empty())
    elif command == 'top':
        print(si.top())

