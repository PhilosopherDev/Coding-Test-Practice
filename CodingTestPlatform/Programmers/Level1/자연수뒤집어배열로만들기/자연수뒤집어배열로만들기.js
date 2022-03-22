/**
 * 자연수뒤집어배열로만들기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript
 */

function solution(n) {
    return String(n).split("").reverse().map((val) => parseInt(val));
}