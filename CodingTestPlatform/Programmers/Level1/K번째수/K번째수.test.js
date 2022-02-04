/**
 * K번째수.test.js
 */

const solution = require("./K번째수");

test('K번째수 1', () => {
  expect(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3])
});
