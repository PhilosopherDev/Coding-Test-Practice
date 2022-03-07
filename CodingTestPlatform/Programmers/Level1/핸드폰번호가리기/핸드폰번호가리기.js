/**
 * 핸드폰번호가리기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript
 */

function solution(phone_number) {
    return new Array(phone_number.length - 4).fill("*").join("") + phone_number.slice(phone_number.length - 4);
}

function solution2(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

module.exports = solution2;