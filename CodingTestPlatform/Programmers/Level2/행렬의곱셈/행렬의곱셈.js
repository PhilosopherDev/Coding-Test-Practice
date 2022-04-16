/**
 * 행렬의곱셈.js
 * https://programmers.co.kr/learn/courses/30/lessons/12949?language=javascript
 */

function solution(arr1, arr2) {
    const m = arr1.length, n = arr2[0].length;
    const answer = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            answer[i][j] = arr1[i].reduce((acc, val, idx) => {
                acc += val * arr2[idx][j];
                return acc;
            }, 0);
        }
    }

    return answer;
}

module.exports = solution;