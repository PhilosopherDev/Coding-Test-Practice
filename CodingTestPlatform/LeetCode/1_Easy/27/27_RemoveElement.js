/**
 * 27. Remove Element
 * Easy
 * https://leetcode.com/problems/remove-element/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const filteredNum = nums.filter((n) => n !== val);    
    filteredNum.forEach((n, idx) =>  nums[idx] = n);
    return filteredNum.length;
};