/**
 * 음양더하기.js
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript
 */

 function solution(absolutes, signs) {
    return absolutes.reduce((acc, num, idx) => {
        if (signs[idx]) {
            acc+=num;
        } else {
            acc-=num;
        }
        return acc;
    }, 0);
}