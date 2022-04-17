/**
 * 소수만들기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript
 */

function solution(nums) {
    const sums = getCombinationsSum(nums, 3).map((arr) => arr.reduce((acc, val) => acc + val, 0));
    let answer = 0;

    sums.forEach((sum) => {
        let isPrimeNum = true;
        for (let i = 2; i <= Math.floor(Math.sqrt(sum)); i++) {
            if (sum % i === 0) {
                isPrimeNum = false;
                break;
            }
        }
        if (isPrimeNum) answer++;
    });

    return answer;
}

const getCombinationsSum = (array, selectNumber) => {
    const results = [];
    if(selectNumber === 1){
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const combinations = getCombinationsSum(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

module.exports = solution;