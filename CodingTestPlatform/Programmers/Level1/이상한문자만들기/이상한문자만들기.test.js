/**
 * 이상한문자만들기.test.js
 */

const solution = require("./이상한문자만들기");

test('이상한 문자만들기 1', () => {
    expect(solution("try hello world")).toBe("TrY HeLlO WoRlD");
});