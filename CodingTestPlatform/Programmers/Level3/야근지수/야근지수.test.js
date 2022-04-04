/**
 * 야근지수.test.js
 */

const solution = require("./야근지수");

test('야근 지수 1', () => {
    expect(solution(4, [4, 3, 3])).toBe(12);    
});

test('야근 지수 2', () => {
    expect(solution(1, [2, 1, 2])).toBe(6);    
});

test('야근 지수 3', () => {
    expect(solution(3, [1,1])).toBe(0);    
});