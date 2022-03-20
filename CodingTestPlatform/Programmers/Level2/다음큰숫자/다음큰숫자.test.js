/**
 * 다음큰숫자.test.js
 */

const solution = require("./다음큰숫자");

test('다음 큰 숫자 1', () => {
    expect(solution(78)).toBe(83);
});

test('다음 큰 숫자 2', () => {
    expect(solution(15)).toBe(23);
});