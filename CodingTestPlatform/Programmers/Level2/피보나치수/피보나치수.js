/**
 * 피보나치수.js
 * https://programmers.co.kr/learn/courses/30/lessons/12945?language=javascript
 * [모듈러 연산의 성질] 참조 - https://programmers.co.kr/questions/11969 : (A + B) % C = ((A % C) + (B % C)) % C
 * [재귀 호출 깊이 한도] 참조 - https://jireh.tistory.com/14
 */

/** 재귀 깊이 초과로 실패 */
function solution(n) {
    return fibonacci(n);
}

const memoization = {
    0: 0,
    1: 1,
    2: 1
}

function fibonacci(n) {
    if (memoization[n] !== undefined) return memoization[n];
    
    const answer = ((fibonacci(n - 1) % 1234567) + (fibonacci(n - 2) % 1234567)) % 1234567;
    if (memoization[n] === undefined) memoization[n] = answer;
    return answer;
}

/** 배열로 풀이 */
function solution2(n) {
    const fibonacci = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibonacci.push(((fibonacci[i - 1] % 1234567) + (fibonacci[i - 2] % 1234567)) % 1234567);
    }

    return fibonacci[n];
}

module.exports = solution2;