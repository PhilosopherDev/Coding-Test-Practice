/**
 * 체육복.js
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/42862
 */

function solution(n, lost, reserve) {
    const diffLost = lost.filter((l) => reserve.indexOf(l) === -1);
    const diffReserve = reserve.filter((r) => lost.indexOf(r) === -1);

    diffReserve.sort((a, b) => a - b).forEach((dr) => {
        const idx = diffLost.indexOf(dr - 1);
        const idx2 = diffLost.indexOf(dr + 1);
        if (idx > -1) {
            diffLost.splice(idx, 1);
        } else if (idx2 > -1) { 
            diffLost.splice(idx2, 1);
        }
    });

    return n - diffLost.length;
}

module.exports = solution;