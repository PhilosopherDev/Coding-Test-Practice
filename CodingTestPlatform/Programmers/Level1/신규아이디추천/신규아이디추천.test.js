/**
 * 신규아이디추천.test.js
 */

const solution = require("./신규아이디추천");

test('신규 아이디 추천 1', () => {
    expect(solution("...!@BaT#*..y.abcdefghijklm")).toBe("bat.y.abcdefghi");
});

test('신규 아이디 추천 2', () => {
    expect(solution("z-+.^.")).toBe("z--");
});

test('신규 아이디 추천 3', () => {
    expect(solution("=.=")).toBe("aaa");
});

test('신규 아이디 추천 4', () => {
    expect(solution("123_.def")).toBe("123_.def");
});

test('신규 아이디 추천 5', () => {
    expect(solution("abcdefghijklmn.p")).toBe("abcdefghijklmn");
});
