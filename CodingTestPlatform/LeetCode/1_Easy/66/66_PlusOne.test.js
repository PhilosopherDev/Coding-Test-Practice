/**
 * 66_PlusOne.test.js
 */

const plusOne = require('./66_PlusOne');

test('1', () => {
    expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
});

test('2', () => {
    expect(plusOne([9])).toEqual([1, 0]);
});