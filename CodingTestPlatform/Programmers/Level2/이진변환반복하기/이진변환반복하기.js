/**
 * 이진변환반복하기.js
 * https://programmers.co.kr/learn/courses/30/lessons/70129?language=javascript
 */

function solution(s) {
    let cnt = 0, removedZero = 0, str = s;

    while (str !== "1") {
        cnt++;
        const zeroNum = numberOfZero(str);
        removedZero += zeroNum;
        const remainedLength = str.length - zeroNum;
        str = remainedLength.toString(2);
    }

    return [cnt, removedZero];
}

function numberOfZero(s) {
    return s.split("").filter((num) => num === "0").length;
}

module.exports = solution;