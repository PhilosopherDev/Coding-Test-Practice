/**
 * 오늘 날짜
 * Bronze5
 * https://www.acmicpc.net/problem/10699
 * String.prototype.padStart [reference]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 */

const d = new Date();
const fullYear = d.getFullYear();
const month = d.getMonth() + 1;
const date = d.getDate();

console.log(`${fullYear}-${month.toString().padStart(2, 0)}-${date.toString().padStart(2, 0)}`);