# 유레카 이론
# https://www.acmicpc.net/problem/10448

T = [n * (n+1) // 2 for n in range(45)]

def is_possible(K):
    for i in range(1, 45):
        for j in range(i, 45):
            for k in range(j, 45):
                if T[i] + T[j] + T[k] == K:
                    return 1

    return 0


for _ in range(int(input())):
    print(is_possible(int(input())))
