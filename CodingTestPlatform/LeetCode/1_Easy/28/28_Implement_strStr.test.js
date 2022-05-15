/**
 * 28_Implement_strStr.test.js
 */

const solution = require("./28_Implement_strStr");

test('1', () => { 
    expect(solution("hello", "ll")).toBe(2);
})

test('2', () => { 
    expect(solution("aaaaa", "bba")).toBe(-1);
})

test('3', () => { 
    expect(solution("aaaaa", "")).toBe(0);
})