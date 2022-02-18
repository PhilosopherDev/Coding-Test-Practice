/**
 * 이진수출력.test.js
 */

const solution = require("./이진수출력");

test('11 to binary', () => {
    expect(solution(11)).toBe("1011")
});

test('28 to binary', () => {
    expect(solution(28)).toBe("11100")
});

test('378 to binary', () => {
    expect(solution(378)).toBe("101111010")
});

test('5854 to binary', () => {
    expect(solution(5854)).toBe("1011011011110")
});

test('73821 to binary', () => {
    expect(solution(73821)).toBe("10010000001011101")
});