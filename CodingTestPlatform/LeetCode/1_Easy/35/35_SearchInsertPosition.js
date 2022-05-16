/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let answer = nums.length;
    nums.some((num, idx) => {
        if (num >= target) {
            answer = idx;
            return true;
        } else {
            return false;
        }
    });
    
    return answer;
};