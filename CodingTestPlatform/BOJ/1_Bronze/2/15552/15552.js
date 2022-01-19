/**
 * 빠른 A+B
 * Bonze2
 * https://www.acmicpc.net/problem/15552
 */

const [T, ...num] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const result = num.map((str) => {
    const num = str.split(" ").map((char) => parseInt(char));
    return num[0] + num[1];
});

console.log(result.join("\n"));

