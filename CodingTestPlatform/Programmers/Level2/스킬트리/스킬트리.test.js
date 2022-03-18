/**
 * 스킬트리.test.js
 */

const solution = require("./스킬트리");

test('스킬트리 1', () => {
    expect(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
});
