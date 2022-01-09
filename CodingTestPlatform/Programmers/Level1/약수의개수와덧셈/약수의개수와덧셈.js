/**
 * 약수의개수와덧셈.js
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/77884
 */

 function solution(left, right) {
    var answer = 0;
    
    for (let i = left; i <= right; i++) {
        let yaksuNum = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) yaksuNum++;
        }
        yaksuNum % 2 === 1 ? answer -= i : answer += i;
    }
    
    return answer;
}

// 다른 사람 풀이 - 제곱근 활용
function solution2(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}