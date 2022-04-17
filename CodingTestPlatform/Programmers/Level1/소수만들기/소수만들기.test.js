/**
 * 소수만들기.test.js
 */

const solution = require('./소수만들기');

test('소수 만들기 1', () => {
    expect(solution([1,2,3,4])).toBe(1);
});

test('소수 만들기 2', () => {
    expect(solution([1,2,7,6,4])).toBe(4);
});