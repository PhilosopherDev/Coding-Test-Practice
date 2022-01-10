/**
 * 387_FirstUniqueCharacterInAString.js
 * Easy
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */

var firstUniqChar = function(s) {
    const strHash = {};
    const sArr = s.split("");

    sArr.forEach((char) => {
        if (!strHash[char]) {
            strHash[char] = 1;
        } else {
            strHash[char]++;
        }
    });

    for (let i = 0; i < sArr.length; i++) {
        if (strHash[sArr[i]] === 1) return i;
    }

    return -1;
};

// 참조 - https://leetcode.com/problems/first-unique-character-in-a-string/discuss/369575/My-Javascript-Solution
var firstUniqChar2 = function(s) {
    for(i=0; i<s.length; i++)
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    return -1
};

module.exports.firstUniqChar = firstUniqChar;