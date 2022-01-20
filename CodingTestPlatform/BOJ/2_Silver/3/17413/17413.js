/**
 * 단어 뒤집기 2 
 * https://www.acmicpc.net/problem/17413
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("");

let result = [], temp = '';

input.forEach((c, idx) => {
    if (c === '<') {
        if (temp.length) result.push(temp.split("").reverse().join(""));
        temp = '';
        temp += c;
    } else if (c === '>') {
        temp += c;
        result.push(temp);
        temp = '';
    } else if (c === ' ') {
        if (temp.indexOf('<') > -1) {
            temp += c;
        } else {
            result.push(temp.split("").reverse().join(""));
            result.push(' ');
            temp = '';
        }
    } else {
        temp += c;
    }
    if (temp.length && idx === input.length - 1) result.push(temp.split("").reverse().join(""));
});

console.log(result.join(""));
