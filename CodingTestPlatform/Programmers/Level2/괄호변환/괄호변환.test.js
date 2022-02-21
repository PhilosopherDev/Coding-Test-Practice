/**
 * 괄호변환.test.js
 */

const solution = require("./괄호변환");

test('괄호 변환 1', () => {
    expect(solution("(()())()")).toBe("(()())()");
});

test('괄호 변환 2', () => {
    expect(solution(")(")).toBe("()");
});

test('괄호 변환 3', () => {
    expect(solution("()))((()")).toBe("()(())()");
});