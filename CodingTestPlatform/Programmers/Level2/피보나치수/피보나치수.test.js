/**
 * 피보나치수.test.js
 */

const solution = require("./피보나치수");

test('피보나치 수 3', () => {
    expect(solution(3)).toBe(2);
});

test('피보나치 수 5', () => {
    expect(solution(5)).toBe(5);
});

test('피보나치 수 10', () => {
    expect(solution(10)).toBe(55);
});

test('피보나치 수 50', () => {
    expect(solution(50)).toBe(1093027);
});

test('피보나치 수 50', () => {
    expect(solution(75)).toBe(844763);
});