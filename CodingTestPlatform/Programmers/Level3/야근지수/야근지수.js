/**
 * 야근지수.js
 * https://programmers.co.kr/learn/courses/30/lessons/12927?language=javascript
 */

function solution(n, works) {
    works.sort((a, b) => b - a);
    let i = n;
    
    while (i > 0) {
        const max = works[0];
        if (max === 0) break;
        for (let j = 0; j < works.length; j++) {
            if (works[j] === max && i > 0) {
                works[j]--;
                i--;
            } else {
                break;
            }
        }        
    }

    return works.reduce((acc, work) => acc + Math.pow(work, 2), 0);
}

module.exports = solution;