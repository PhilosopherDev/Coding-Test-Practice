/**
 * 두정수사이의합.js
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/12912
 */

function solution(a, b) {
    if (a === b) return a;
    const min = Math.min(a, b) - 1, max = Math.max(a, b);
    
    return ((max * (max + 1))/2) - ((min *(min + 1))/2);
}