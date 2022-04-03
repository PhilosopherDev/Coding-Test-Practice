/**
 * n^2배열자르기.js
 * https://programmers.co.kr/learn/courses/30/lessons/87390?language=javascript
 */

function solution(n, left, right) {
    const arr = [];
    
    for (let i = left; i <= right; i++) {
        arr.push(Math.floor(Math.max(i / n, i % n)) + 1);
    }

    return arr;
}

module.exports = solution;