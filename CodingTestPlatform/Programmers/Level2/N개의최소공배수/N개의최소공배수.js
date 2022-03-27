/**
 * N개의최소공배수.js
 * https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript
 */

function solution(arr) {
    const max = Math.max(...arr);
    let i = 1;

    while (true) {
        if (arr.every((num) => (max * i) % num === 0)) break;
        i++;
    }

    return max * i;
}

module.exports = solution;