/**
 * 괄호
 * Silver4
 * https://www.acmicpc.net/problem/9012
 */

const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const result = input.map((bracket) => {
    const b = bracket.split("");
    let leftBracket = 0;
    for (let i = 0; i < b.length; i++) {
        b[i] === "(" ? leftBracket++ : leftBracket--;
        if (leftBracket < 0) break;
    }
    return leftBracket === 0 ? "YES" : "NO";
});

console.log(result.join("\n"));