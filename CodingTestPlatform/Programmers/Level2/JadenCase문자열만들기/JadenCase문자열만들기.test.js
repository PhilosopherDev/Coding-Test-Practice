/**
 * JadenCase문자열만들기.test.js
 */

const solution = require("./JadenCase문자열만들기");

test('JadenCase 문자열 만들기 1', () => {
    expect(solution("3people unFollowed me")).toBe("3people Unfollowed Me"); 
});

test('JadenCase 문자열 만들기 2', () => {
    expect(solution("for the last week")).toBe("For The Last Week"); 
});

test('JadenCase 문자열 만들기 3', () => {
    expect(solution("a a  a  a   a    a")).toBe("A A  A  A   A    A"); 
});