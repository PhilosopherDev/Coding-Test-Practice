/**
 * 알파벳 개수
 * Bronze2
 * https://www.acmicpc.net/problem/10808
 */

const S = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
const result = new Array(num).fill(0);

S.split("").forEach((char) => result[char.charCodeAt(0) - 'a'.charCodeAt(0)]++ );

console.log(result.join(" "));