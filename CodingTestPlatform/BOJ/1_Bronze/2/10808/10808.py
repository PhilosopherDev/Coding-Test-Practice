# 알파벳 개수
# https://www.acmicpc.net/problem/10808

import sys
input = sys.stdin.readline

S = input().rstrip()
A = [0] * 26

for c in S:
    A[ord(c) - 97] += 1
    
print(" ".join(map(str, A)))