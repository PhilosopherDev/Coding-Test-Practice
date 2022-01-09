/**
 * 14_LongestCommonPrefix.js
 * https://leetcode.com/problems/longest-common-prefix/
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((result, str) => {
        result = compareStr(result, str);
        return result;
    }, strs[0]);
};

function compareStr(str1, str2) {
    const minLength = Math.min(str1.length, str2.length);
    let idx = minLength;
    for (let i = 0; i < minLength; i++) {
        if (str1[i] !== str2[i]) {
            idx = i;
            break;
        }
    }
    return str1.slice(0, idx);
}