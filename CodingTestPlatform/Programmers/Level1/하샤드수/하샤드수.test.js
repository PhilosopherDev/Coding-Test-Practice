/**
 * 하샤드수.test.js
 */

const solution = require("./하샤드수");

test('하샤드 수 1', () => {
    expect(solution(10)).toBe(true);
});

test('하샤드 수 2', () => {
    expect(solution(12)).toBe(true);
});

test('하샤드 수 3', () => {
    expect(solution(11)).toBe(false);
});

test('하샤드 수 4', () => {
    expect(solution(13)).toBe(false);
});