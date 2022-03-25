/**
 * 문자열다루기기본.js
 * https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript
 */

function solution(s) {
    return String(parseInt(s)) === s && (s.length === 4 || s.length === 6)
}