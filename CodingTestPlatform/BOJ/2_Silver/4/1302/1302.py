# 베스트셀러
# https://www.acmicpc.net/problem/1302

import sys

input = sys.stdin.readline
N = int(input().rstrip())

book_map = {}
for _ in range(N):
    book = input().rstrip()
    if book in book_map:
        book_map[book] += 1
    else:
        book_map[book] = 1

rst = []
for key in book_map:
    rst.append((book_map[key], key))

rst.sort(key=lambda x: (-x[0], x[1]))
print(rst[0][1])
