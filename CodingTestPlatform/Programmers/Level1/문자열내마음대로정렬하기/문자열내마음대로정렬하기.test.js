/**
 * 문자열내마음대로정렬하기.test.js
 */

const solution = require("./문자열내마음대로정렬하기");

test('1', () => {
    expect(solution(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
});

test('2', () => {
    expect(solution(["abce", "abcd", "cdx"], 2)).toEqual(["abcd", "abce", "cdx"]);
});