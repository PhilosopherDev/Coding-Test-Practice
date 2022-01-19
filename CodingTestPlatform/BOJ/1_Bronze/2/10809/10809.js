/**
 * 알파벳 찾기
 * Bronze2
 * https://www.acmicpc.net/problem/10809
 */

const S = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
const result = new Array(num).fill(-1);

S.split("").forEach((char, idx) => {
    const resultIdx = char.charCodeAt(0) - 'a'.charCodeAt(0);
    if (result[resultIdx] === -1) {
        result[resultIdx] = idx;
    }
});

console.log(result.join(" "));