/**
 * 26. Remove Duplicates from Sorted Array
 * Easy
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const expectedNum = Array.from(new Set(nums));
    for (let i = 0; i < expectedNum.length; i++) {
        nums[i] = expectedNum[i];
    }
    
    return expectedNum.length;
};