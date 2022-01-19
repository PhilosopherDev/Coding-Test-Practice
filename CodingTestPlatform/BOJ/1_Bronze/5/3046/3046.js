/**
 * R2
 * Bronze5
 * https://www.acmicpc.net/problem/3046
 */

const [num1, num2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map((char) => parseInt(char));

console.log((2 * num2) - num1);