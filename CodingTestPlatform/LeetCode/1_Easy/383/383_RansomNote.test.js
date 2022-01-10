/**
 * 383_RansomNote.test.js
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const { canConstruct } = require("./383_RansomNote");

test('1', () => {
   expect(canConstruct("a", "b")).toBe(false); 
});

test('2', () => {
    expect(canConstruct("aa", "ab")).toBe(false); 
});

test('3', () => {
    expect(canConstruct("aa", "aab")).toBe(true); 
});
