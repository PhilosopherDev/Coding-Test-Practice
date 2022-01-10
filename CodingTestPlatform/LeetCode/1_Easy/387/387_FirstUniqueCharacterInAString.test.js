/**
 * 387_FirstUniqueCharacterInAString.test.js
 */

const { firstUniqChar } = require("./387_FirstUniqueCharacterInAString");

test('s = "leetcode" => 0', () => {
    expect(firstUniqChar("leetcode")).toBe(0);
});

test('s = "loveleetcode" => 2', () => {
    expect(firstUniqChar("loveleetcode")).toBe(2);
});

test('s = "aabb" => -1', () => {
    expect(firstUniqChar("aabb")).toBe(-1);
});
