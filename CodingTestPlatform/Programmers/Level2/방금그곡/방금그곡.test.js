/**
 * 방금그곡.test.js
 * https://programmers.co.kr/learn/courses/30/lessons/17683?language=javascript
 */

const solution = require("./방금그곡");

test('방금그곡 1', () => {
    expect(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])).toBe("HELLO");
});

test('방금그곡 2', () => {
    expect(solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"])).toBe("FOO");
});

test('방금그곡 3', () => {
    expect(solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])).toBe("WORLD");
});