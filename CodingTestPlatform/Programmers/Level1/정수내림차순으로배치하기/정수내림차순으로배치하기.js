/**
 * 정수내림차순으로배치하기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript
 */

function solution(n) {
    return parseInt(String(n).split("").sort((a, b) => b.localeCompare(a)).join(""));
}