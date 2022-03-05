/**
 * 영어끝말잇기.test.js
 */

const solution = require("./영어끝말잇기");

test('영어 끝말잇기 1', () => {
    expect(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])).toEqual([3, 3]);
});

test('영어 끝말잇기 2', () => {
    expect(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])).toEqual([0, 0]);
});

test('영어 끝말잇기 3', () => {
    expect(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])).toEqual([1,3]);
});