/**
 * A-B
 * Bronze5
 * https://www.acmicpc.net/problem/1001
 */

const [num1, num2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map((char) => parseInt(char));

console.log(num1 - num2);