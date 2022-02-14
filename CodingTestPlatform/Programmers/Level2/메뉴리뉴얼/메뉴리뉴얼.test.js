/**
 * 메뉴리뉴얼.test.js
 */

const solution = require("./메뉴리뉴얼");

test('메뉴 리뉴얼 1', () => {
    expect(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])).toEqual(["AC", "ACDE", "BCFG", "CDE"]);
});

test('메뉴 리뉴얼 2', () => {
    expect(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5])).toEqual(["ACD", "AD", "ADE", "CD", "XYZ"]);
});

test('메뉴 리뉴얼 3', () => {
    expect(solution(["XYZ", "XWY", "WXA"], [2,3,4])).toEqual(["WX", "XY"]);
});