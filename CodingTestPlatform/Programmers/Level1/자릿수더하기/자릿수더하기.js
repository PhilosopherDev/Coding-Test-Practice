/**
 * 자릿수더하기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript
 */
function solution(n) {
    return String(n).split("").map((char) => parseInt(char)).reduce((acc, num) => acc+ num, 0);
}