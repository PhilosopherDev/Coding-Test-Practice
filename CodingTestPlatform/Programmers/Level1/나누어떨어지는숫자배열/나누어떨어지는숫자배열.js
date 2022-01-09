/**
 * 나누어떨어지는숫자배열
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/12910
 */

 function solution(arr, divisor) {
    const answer = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);
    
    if (answer.length === 0) return [-1];
    return answer;
}