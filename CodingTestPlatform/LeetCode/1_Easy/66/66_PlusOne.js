/**
 * Easy
 * 66. Plus One
 * https://leetcode.com/problems/plus-one/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let over = true;
    const newDigits = digits.reverse().map((digit) => {
        if (digit === 9 && over === true) {
            return 0;
        } else if (over === true) { 
            over = false;
            return digit + 1
        } else {
            over = false;       
            return digit;
        }
    });

    if (newDigits[newDigits.length - 1] === 0) newDigits.push(1);
    return newDigits.reverse();
};

module.exports = plusOne;