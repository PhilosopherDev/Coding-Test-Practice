/**
 * N개의최소공배수.test.js
 */

const solution = require("./N개의최소공배수");

test('N개의 최소공배수 1', () => {
    expect(solution([2, 6, 8, 14])).toBe(168);
});

test('N개의 최소공배수 2', () => {
    expect(solution([1, 2, 3])).toBe(6);
});