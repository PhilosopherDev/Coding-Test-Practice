/**
 * 콜라츠추측.test.js
 */

const solution = require("./콜라츠추측");

test('콜라츠 추측 1', () => {
    expect(solution(6)).toBe(8);
});

test('콜라츠 추측 2', () => {
    expect(solution(16)).toBe(4);
});

test('콜라츠 추측 3', () => {
    expect(solution(626331)).toBe(-1);
});