/**
 * 신고결과받기.test.js
 */

const solution = require("./신고결과받기");

test('신고 결과 받기 1', () => {
    expect(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)).toEqual([2,1,1,0]);
});

test('신고 결과 받기 2', () => {
    expect(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)).toEqual([0, 0]);
});