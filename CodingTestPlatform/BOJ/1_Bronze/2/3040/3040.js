/**
 * 백설 공주와 일곱 난쟁이 - 2309 일곱 난쟁이 와 동일
 * Bronze2
 * https://www.acmicpc.net/problem/3040
 */

 const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
 const numArr = input.map((str) => parseInt(str));
 const sum = numArr.reduce((acc, num) => acc + num, 0);
 
 let result;
 
 for (let i = 0; i < numArr.length - 1; i++) {
     for (let j = i + 1; j < numArr.length; j++) {
         if (sum - numArr[i] - numArr[j] === 100) {
            result = numArr.filter((num) => (num !== numArr[i] && num !== numArr[j])); 
            break;
         }
     }
 }
 
 console.log(result.sort((a, b) => a - b).join('\n'));