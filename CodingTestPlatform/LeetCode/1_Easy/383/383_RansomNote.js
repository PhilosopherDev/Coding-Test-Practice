/**
 * 383_RansomNote.js
 * Easy
 * https://leetcode.com/problems/ransom-note/
 */

var canConstruct = function(ransomNote, magazine) {
    const mHash = {};
    magazine.split("").forEach((char) => {
        if (!mHash[char]) {
            mHash[char] = 1;
        } else {
            mHash[char]++;
        }
    });

    for (let i = 0; i < ransomNote.length; i++) {
        if (!mHash[ransomNote[i]]) return false;

        mHash[ransomNote[i]]--;
    }
        
    return true;
};

module.exports.canConstruct = canConstruct;