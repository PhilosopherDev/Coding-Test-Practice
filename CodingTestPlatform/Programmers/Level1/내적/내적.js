/**
 * 내적.js
 * https://programmers.co.kr/learn/courses/30/lessons/70128?language=javascript
 */

function solution(a, b) {
    return a.reduce((acc, val, idx) => acc + val * b[idx], 0);
}