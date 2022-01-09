/**
 * 폰켓몬.js
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/1845
 */

 function solution(nums) {
    const species = new Set(nums);
    if (species.size > (nums.length/2)) {
        return nums.length/2;
    } else {
        return species.size
    }
}