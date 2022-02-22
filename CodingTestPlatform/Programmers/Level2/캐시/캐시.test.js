/**
 * 캐시.test.js
 */

const solution = require("./캐시");

test('캐시 1', () => {
    expect(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])).toBe(50);
});

test('캐시 2', () => {
    expect(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])).toBe(21);
});

test('캐시 3', () => {
    expect(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])).toBe(60);
});

test('캐시 4', () => {
    expect(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])).toBe(52);
});

test('캐시 5', () => {
    expect(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])).toBe(16);
});

test('캐시 6', () => {
    expect(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])).toBe(25);
});