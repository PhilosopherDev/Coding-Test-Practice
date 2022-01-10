/**
 * 위장.js
 * Level2
 * https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
 */

function solution(clothes) {
    const clothesMap = {};

    clothes.forEach((cloth) => {
        if (!clothesMap[cloth[1]]) {
            clothesMap[cloth[1]] = 1;
        } else {
            clothesMap[cloth[1]]++;
        }
    });

    return Object.keys(clothesMap).reduce((answer, key) => {
        answer *= clothesMap[key] + 1;
        return answer;
    }, 1) - 1;
}

module.exports.solution = solution;