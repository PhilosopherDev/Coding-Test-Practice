/**
 * 구간 합 구하기 4
 * Silver3
 * https://www.acmicpc.net/problem/11659
 */

const [NM, number, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const numArr = number.split(" ").map((c) => parseInt(c));
let accSum = [0];

for (let i = 0; i < numArr.length; i++) {
    accSum.push(accSum[i] + numArr[i]);
}

const result = input.map((v) => {
    const [start, end] = v.split(" ");
    return accSum[end] - accSum[start-1];
});

console.log(result.join("\n"));