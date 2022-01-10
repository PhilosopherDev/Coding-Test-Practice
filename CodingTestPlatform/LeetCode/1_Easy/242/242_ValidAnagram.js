/**
 * 242_ValidAnagram.js
 * Easy
 * https://leetcode.com/problems/valid-anagram/
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const sSorted = s.split("").sort().join("");
    const tSorted = t.split("").sort().join("");

    return sSorted === tSorted;
};

module.exports.isAnagram = isAnagram;