/**
 * 회사에 있는 사람
 * Silver5
 * https://www.acmicpc.net/problem/7785
 * Set to Array [reference]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 */

const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const s = new Set([]);

input.forEach((log) => {
    const [name, state] = log.split(" ");
    if (state === 'enter') {
        s.add(name);
    } else if (state === 'leave') {
        s.delete(name);
    }
});

console.log(Array.from(s).sort().reverse().join("\n"));