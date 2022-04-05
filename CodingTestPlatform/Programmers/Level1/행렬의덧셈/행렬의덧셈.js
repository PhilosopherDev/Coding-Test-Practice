/**
 * 행렬의덧셈.js
 * https://programmers.co.kr/learn/courses/30/lessons/12950?language=javascript
 */

function solution(arr1, arr2) {
    return arr1.map((arr, row) => {
        return arr.map((val, col) => val + arr2[row][col]);
    });
}