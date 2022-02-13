/**
 * 비밀지도.js
 * https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
 */

function solution(n, arr1, arr2) {
    let answer = new Array(n).fill(null);

    return answer.map((num, idx) => {
        let binary = (arr1[idx] | arr2[idx]).toString(2);
        binary = binary.padStart(n, 0);
        binary = binary.replace(/1/g, '#');
        return binary.replace(/0/g, ' ');
    });
}

/** 축약 version */
function solution2(n, arr1, arr2) {
    return Array(n).fill(null).map((num, idx) => (arr1[idx] | arr2[idx]).toString(2).padStart(n, 0).replace(/1/g, '#').replace(/0/g, ' '));
}

/** Array 만큼 공간 절약 */
function solution3(n, arr1, arr2) {
    return arr1.map((arr1Item, idx) => (arr1Item | arr2[idx]).toString(2).padStart(n, 0).replace(/1/g, '#').replace(/0/g, ' '));
}

module.exports = solution;