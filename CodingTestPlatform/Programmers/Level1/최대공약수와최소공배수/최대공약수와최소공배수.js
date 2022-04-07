/**
 * 최대공약수와최소공배수.js
 * https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript
 */

function solution(n, m) {
    return [getGreatestCommonDivisor(n, m), getLeastCommonMultiple(n, m)];
}

function getGreatestCommonDivisor(n, m) {
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    
    for (let i = min; i > 0; i--) {
        if (min % i === 0 && max % i === 0) return i;
    }
}

function getLeastCommonMultiple(n, m) {
    return n * m / getGreatestCommonDivisor(n, m)
}