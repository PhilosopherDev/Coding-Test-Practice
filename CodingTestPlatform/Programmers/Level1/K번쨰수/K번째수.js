/**
 * K번째수.js
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 */

function solution(array, commands) {
    return commands.map((c) => {
        const [start, end, idx] = c;
        return array.slice(start - 1, end).sort((a, b) => a - b)[idx - 1];
    });
}

module.exports = solution;