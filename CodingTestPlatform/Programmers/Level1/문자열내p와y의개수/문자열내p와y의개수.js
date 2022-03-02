/**
 * 문자열내p와y의개수.js
 * https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
 */

function solution(s) {
    const p = s.toLowerCase().match(/p/g);
    const y = s.toLowerCase().match(/y/g);
    
    if (p === null && y === null) return true;
    if (p && y && p.length === y.length) return true;
    return false;
}