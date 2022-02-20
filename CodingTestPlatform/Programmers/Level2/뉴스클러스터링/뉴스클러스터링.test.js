/**
 * 뉴스클러스터링.test.js
 */

const solution = require("./뉴스클러스터링");

test('뉴스 클러스터링 1', () => {
    expect(solution("FRANCE", "french")).toBe(16384);
});

test('뉴스 클러스터링 2', () => {
    expect(solution("handshake", "shake hands")).toBe(65536);
});

test('뉴스 클러스터링 3', () => {
    expect(solution("aa1+aa2", "AAAA12")).toBe(43690);
});

test('뉴스 클러스터링 4', () => {
    expect(solution("E=M*C^2", "e=m*c^2")).toBe(65536);
});