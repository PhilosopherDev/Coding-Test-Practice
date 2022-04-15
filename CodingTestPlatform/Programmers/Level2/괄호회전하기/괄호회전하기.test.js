/**
 * 괄호회전하기.test.js
 */

test('괄호 회전하기 1', () => {
    expect(solution("[](){}")).toBe(3);
});

test('괄호 회전하기 2', () => {
    expect(solution("}]()[{")).toBe(2);
});

test('괄호 회전하기 3', () => {
    expect(solution("[)(]")).toBe(0);
});

test('괄호 회전하기 4', () => {
    expect(solution("}}}")).toBe(0);
});