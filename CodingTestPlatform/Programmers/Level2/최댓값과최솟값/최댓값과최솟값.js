/**
 * 최댓값과최솟값.js
 * https://programmers.co.kr/learn/courses/30/lessons/12939?language=javascript
 */

function solution(s) {
    const arr = s.split(" ");
    let min = Infinity, max = -Infinity;
    arr.map((val) => Number(val)).forEach((num) => {
        min = Math.min(min, num);
        max = Math.max(max, num)
    });
    
    return `${min} ${max}`;
}