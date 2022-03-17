/**
 * 올바른괄호.js
 * https://programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
 */

function solution(s){
    let stk = 0;
    const arr = s.split("");
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] === '(' ? stk++ : stk--;
        if (stk < 0) break;
    }
    if (stk !== 0) return false;
    return true;
}