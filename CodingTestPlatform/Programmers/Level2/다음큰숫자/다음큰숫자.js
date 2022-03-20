/**
 * 다음큰숫자.js
 * https://programmers.co.kr/learn/courses/30/lessons/12911?language=javascript
 */

function solution(n) {
    const numOfOne = countOne(convertToBinaryStr(n));
    let nextBiggerNum = n;

    while (true) {
        nextBiggerNum++;
        const numOfOneNext = countOne(convertToBinaryStr(nextBiggerNum));
        if (numOfOne === numOfOneNext) break;
    }

    return nextBiggerNum;
}

function convertToBinaryStr(n) {
    let str = "", num = n;

    while (num > 0) {
        str = num % 2 + str;
        num = Math.floor(num / 2);
    }

    return str;
}

function countOne(str) {
    return str.split("").filter((c) => c === '1').length;
}

module.exports = solution;