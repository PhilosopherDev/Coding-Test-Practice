/**
 * 예산.js
 * https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript
 */

function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((acc, price) => {
        budget -= price;
        if (budget >= 0) acc++;
        return acc;
    }, 0);
}