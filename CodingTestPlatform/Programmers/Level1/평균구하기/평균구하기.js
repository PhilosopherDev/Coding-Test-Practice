/**
 * 평균구하기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
 */

function solution(arr) {
    return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}