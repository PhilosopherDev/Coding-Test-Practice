/**
 * n^2배열자르기.test.js
 */

const solution = require("./n제곱배열자르기");

test('n^2 배열 자르기 1', () => {
    expect(solution(3, 2, 5)).toEqual([3, 2, 2, 3]);
});

test('n^2 배열 자르기 2', () => {
    expect(solution(4, 7, 14)).toEqual([4, 3, 3, 3, 4, 4, 4, 4]);
});