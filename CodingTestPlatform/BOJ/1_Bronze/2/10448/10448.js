/**
 * 유레카 이론
 * Bronze2
 * https://www.acmicpc.net/problem/10448
 * breaking for loop by return [reference] - https://stackoverflow.com/questions/183161/whats-the-best-way-to-break-from-nested-loops-in-javascript 
 */

const [K, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numArr = input.map((str) => parseInt(str));
const T = (n) => {
    return n * (n + 1) / 2
}
const calcThreeT = (num, idx) => {
    for (let i = 1; i < idx; i++) {
        for (let j = 1; j < idx; j++) {
            for (let k = 1; k < idx; k++) {
                if ((T(i) + T(j) + T(k)) === num) {
                    return 1;
                }
            }
        }
    }
    return 0;
}

let idx = 1, max = 0;
while (max < 1000) {
    ++idx;
    max = T(idx);
}

const result = numArr.map((num) => calcThreeT(num, idx)).join('\n');

console.log(result);