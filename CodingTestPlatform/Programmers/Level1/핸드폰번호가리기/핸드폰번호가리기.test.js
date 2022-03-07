/**
 * 핸드폰번호가리기.test.js
 */

const solution = require("./핸드폰번호가리기");

test('핸드폰 번호 가리기 1', () => {
    expect(solution("01033334444")).toBe("*******4444");
});

test('핸드폰 번호 가리기 2', () => {
    expect(solution("027778888")).toBe("*****8888");
});