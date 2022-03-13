/**
 * 제일작은수제거하기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript
 */

function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const min = Math.min(...arr);   
    const minIdx = arr.indexOf(min)
    arr.splice(minIdx, 1);
    return arr;
}