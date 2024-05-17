/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxIdx = 0;
    let i = 0;

    while (i <= maxIdx && i <= nums.length - 1) {
        if (maxIdx < nums[i] + i) {
            maxIdx = nums[i] + i;
        }
        i++;
    }

    return maxIdx >= nums.length - 1;
};