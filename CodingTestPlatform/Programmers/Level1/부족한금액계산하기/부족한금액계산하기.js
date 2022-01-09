/**
 * 부족한금액계산하기.js
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript
 */

 function solution(price, money, count) {
    var answer = 0, sum = 0;
    
    for (let i = 1; i <= count; i++) {
        sum += price * i;
    }
    if (sum > money) {
        answer = sum - money;
    }
    
    return answer;
}