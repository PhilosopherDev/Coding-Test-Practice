/**
 * 단어 뒤집기
 * Bronze1
 * https://www.acmicpc.net/problem/9093
 */

const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const result = input.map((str) => {
    return str.split(" ").map((str2) => {
        return str2.split("").reverse().join("");
    }).join(" ");
}).join("\n");

console.log(result);