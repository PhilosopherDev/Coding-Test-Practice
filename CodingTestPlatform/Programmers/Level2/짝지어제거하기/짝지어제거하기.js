/**
 * 짝지어제거하기.js
 * Level2
 * https://programmers.co.kr/learn/courses/30/lessons/12973
 */

 function solution(s)
 {
     if (s.length % 2 === 1) return 0;
     
     var arr = s.split("");
     var answer = new Stack();
     for (let i = 0; i < s.length; i++) {
         if (answer.peek() === arr[i]) {
             answer.pop();
         } else {
             answer.push(arr[i]);
         }
         
         // 이 코드 없으면 2번째 효율성에서 막힘. 질문하기에서 참조함.
         if(arr.length - i < answer.length) return 0;
     }
     
     return answer.isEmpty() ? 1 : 0;
 }
 
 var Stack = (function() {
     function Stack() {
         this._element = [];
     }
 
     Stack.prototype.push = function(item) {
         this._element.push(item);
     }
 
     Stack.prototype.pop = function() {
         return this._element.pop();
     }
 
     Stack.prototype.peek = function() {
         return this._element[this._element.length - 1];
     }
 
     Stack.prototype.isEmpty = function() {
         return this._element.length === 0;
     }
 
     Stack.prototype.clear = function() {
         this._element = [];
     }
 
     Stack.prototype.size = function() {
         return this._element.length;
     }
 
     return Stack;
 })();