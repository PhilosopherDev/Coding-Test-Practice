/**
 * 베스트셀러
 * Silver4
 * https://www.acmicpc.net/problem/1302
 */

const [N, ...books] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const hashMap = {};
let max = 0;

books.forEach((book) => {
    !hashMap[book] ? hashMap[book] = 1 : hashMap[book]++;
    max = Math.max(max, hashMap[book]);
});

const result = books.filter((book) => hashMap[book] === max).sort()[0];

console.log(result);