/**
 * 숫자의표현.js
 * https://programmers.co.kr/learn/courses/30/lessons/12924?language=javascript
 */

/** 완전 탐색, 효율성 테스트 3, 5 실패 */
function solution(n) {
    var answer = 0;
    
    for (let i = 1; i < Math.ceil(n/2); i++) {
        let sum = 0;
        for (let j = i; j <= Math.ceil(n/2); j++) {
            sum += j;
            if (sum === n) {
                answer ++;
                break;
            } else if (sum > n) {
                break;
            }
        }
    }
    
    return answer + 1;
}

/** 위에서 아래로 해서 성공 */
function solution2(n) {
    var answer = 0;
    
    for (let i = Math.ceil(n/2); i > 0; i--) {
        let sum = 0;
        for (let j = i; j > 0; j--) {
            sum += j;
            if (sum === n) {
                answer ++;
                break;
            } else if (sum > n) {
                break;
            }
        }
    }
    
    return answer + 1;
}

module.exports = solution2;