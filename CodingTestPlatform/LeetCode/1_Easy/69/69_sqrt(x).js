/**
 * Easy
 * 69. Sqrt(x)
 * https://leetcode.com/problems/sqrtx/
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;
    for (let i = 1; i < x; i++) {
        if (i * i > x) return i - 1;
        if (i === x - 1) return i;
    }
};