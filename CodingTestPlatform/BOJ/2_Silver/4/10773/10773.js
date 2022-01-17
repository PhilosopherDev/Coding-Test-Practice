/**
 * 제로
 * 10773.js
 * https://www.acmicpc.net/problem/10773
 * 스택
 */

 const [K, ...n] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
 const stk = [];
 
 for (let i = 0; i < parseInt(K); i++) {
     if (parseInt(n[i]) === 0) {
         stk.pop();
     } else {
         stk.push(parseInt(n[i]));
     }
 }
 
 console.log(stk.reduce((acc, num) => acc + num, 0));