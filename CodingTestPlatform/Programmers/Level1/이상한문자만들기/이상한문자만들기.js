/**
 * 이상한문자만들기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript
 */

function solution(s) {
    return s.split(" ").map(makeWeiredStr).join(" "); // 1
}

function makeWeiredStr(str) {
    return str.split("").map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join(""); // 2
}

module.exports = solution;