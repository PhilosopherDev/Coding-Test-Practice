/**
 * JadenCase문자열만들기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12951?language=javascript
 */

function solution(s) {
    return s.split(" ").map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

module.exports = solution;