/**
 * x만큼간격이있는n개의숫자.js
 * https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript
 */

function solution(x, n) {
    return new Array(n).fill().map((val, idx) => (idx + 1) * x);
}