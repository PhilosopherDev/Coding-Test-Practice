/**
 * 최솟값만들기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12941?language=javascript
 */

function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((acc, num, idx) => acc += num * B[idx], 0);
}