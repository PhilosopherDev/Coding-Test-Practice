/**
 * 이진변환반복하기.test.js
 */

const solution = require("./이진변환반복하기");

test('이진 변환 반복하기 1', () => {
    expect(solution("110010101001")).toEqual([3,8]);
});

test('이진 변환 반복하기 2', () => {
    expect(solution("01110")).toEqual([3,3]);
});

test('이진 변환 반복하기 3', () => {
    expect(solution("1111111")).toEqual([4,1]);
});