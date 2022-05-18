/**
 * Easy
 * 58. Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sArr = s.trim().split(' ');
    return sArr[sArr.length - 1].length;
};