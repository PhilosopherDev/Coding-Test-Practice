/**
 * 괄호회전하기.js
 * https://programmers.co.kr/learn/courses/30/lessons/76502?language=javascript
 */

function solution(s) {
    let answer = 0;
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (isValidBrackets(arr)) answer++;
        arr.push(arr.shift());
    }

    return answer;
}

function isValidBrackets(arr) {
    const stk = [];
    let isValid = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            stk.push('(');
        } else if (arr[i] === ')') {
            if (stk[stk.length - 1] !== '(') {
                isValid = false;
                break;
            } 
            stk.pop();
        } else if (arr[i] === '[') {
            stk.push('[');
        } else if (arr[i] === ']') {
            if (stk[stk.length - 1] !== '[') {
                isValid = false;
                break;
            }
            stk.pop();
        } else if (arr[i] === '{') {
            stk.push('{');
        } else if (arr[i] === '}') {
            if (stk[stk.length - 1] !== '{') {
                isValid = false;
                break;
            }
            stk.pop();
        }
    }

    if (stk.length !== 0) isValid = false;

    return isValid;
}

module.exports = solution;