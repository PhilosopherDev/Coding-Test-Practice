/**
 * 하샤드수.js
 * https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
 */

function solution(x) {
    const d = String(x).split("").map((n) => Number(n)).reduce((acc, num) => acc + num, 0);
    if (x % d === 0) return true;
    return false;
}

module.exports = solution;