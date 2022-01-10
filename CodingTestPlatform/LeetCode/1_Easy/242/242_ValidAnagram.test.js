/**
 * 242_ValidAnagram.test.js
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const { isAnagram } = require("./242_ValidAnagram");

test('s = "anagram", t = "nagaram" => true', () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
});

test('s = "rat", t = "car" = > false', () => {
    expect(isAnagram("rat", "car")).toBe(false);
});