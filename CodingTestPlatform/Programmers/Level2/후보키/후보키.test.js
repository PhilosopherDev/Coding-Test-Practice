/**
 * 후보키.test.js
 */

const solution = require("./후보키");

test('후보키 1', () => {
    expect(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]])).toBe(2);
});