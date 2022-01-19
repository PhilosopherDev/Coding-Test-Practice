/**
 * 문자열 반복
 * Bronze2
 * https://www.acmicpc.net/problem/2675
 */

const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const repeatStr = (str, num) => {
    return str.split("").map((char) => {
        let newChar = '';
        for (let i = 0; i < num; i++) {
            newChar += char;
        }
        return newChar;
    }).join("");
}

const result = input.map((line) => {
    const [R, str] = line.split(" ");
    return repeatStr(str, R);
}).join("\n");

console.log(result);