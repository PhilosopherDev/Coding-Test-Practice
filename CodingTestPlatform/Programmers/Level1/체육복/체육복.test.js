/**
 * 체육복.test.js
 */

const solution = require('./체육복');

test('체육복 1', () => {
    expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
});

test('체육복 2', () => {
    expect(solution(5, [2,4], [3])).toBe(4);
});

test('체육복 3', () => {
    expect(solution(3, [3], [1])).toBe(2);
});
