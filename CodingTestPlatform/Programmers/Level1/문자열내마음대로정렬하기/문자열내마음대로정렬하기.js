/**
 * 문자열내마음대로정렬하기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
 */

function solution(strings, n) {
    strings.sort((a, b) => a[n].localeCompare(b[n]) !== 0 ? a[n].localeCompare(b[n]) : a.localeCompare(b));

    return strings;
}

module.exports = solution;