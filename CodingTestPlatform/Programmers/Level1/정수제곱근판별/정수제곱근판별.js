/**
 * 정수제곱근판별.js
 * https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript
 */

function solution(n) {
    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}