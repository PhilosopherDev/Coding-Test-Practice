/**
 * 위장.test.js
 */

const { solution } = require('./위장');

test('[["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]] => 5', () => {
    expect(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])).toBe(5);
});

test('[["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]] => 3', () => {
    expect(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]])).toBe(3);
});
