/**
 * 콜라츠추측.js
 * https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript
 */

function solution(num) {
    let count = 0, n = num;
    while (count <= 500 && n !== 1) {
        n = colatzGuess(n);
        count++;
    }

    return count > 500 ? -1 : count;
}

function colatzGuess(num) {
    return num % 2 === 0 ? num /= 2 : (num * 3) + 1;
}

module.exports = solution;