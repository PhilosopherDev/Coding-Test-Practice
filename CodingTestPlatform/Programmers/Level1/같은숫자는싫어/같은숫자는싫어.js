/**
 * 같은숫자는싫어.js
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/12906
 */

 function solution(arr)
 {
     var answer = [];
     
     arr.forEach((num ,idx, orgArr) => {
         if (num !== orgArr[idx + 1]) answer.push(num);
     });
     
     return answer;
 }