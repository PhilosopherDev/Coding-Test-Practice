/**
 * 시저암호.test.js
 */

const solution = require("./시저암호");

test('시저 암호 1', () => {
    expect(solution("AB", 1)).toBe("BC");
});

test('시저 암호 2', () => {
    expect(solution("z", 1)).toBe('a');
});

test('시저 암호 3', () => {
    expect(solution("a B z", 4)).toBe("e F d");
});