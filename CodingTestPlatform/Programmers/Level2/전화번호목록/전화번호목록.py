# 전화번호목록.py
# https://programmers.co.kr/learn/courses/30/lessons/42577

# def solution(phone_book):
#     answer = True
#     phone_book.sort(key=lambda n: -len(n))
#     h = {}
#     for i in phone_book:
#         if h.get(i) is True:
#             answer = False
#             break;
#         else:
#             for j in range(1, len(i)):
#                 h[i[:j]] = True

#     return answer

def solution(phone_book):
    answer = True
    hash_map = {}
    for phone_number in phone_book:
        hash_map[phone_number] = 1
    for phone_number in phone_book:
        temp = ""
        for number in phone_number:
            temp += number
            if temp in hash_map and temp != phone_number:
                answer = False
    return answer
