/**
 * 124나라의숫자.js
 * Level2
 * https://programmers.co.kr/learn/courses/30/lessons/12899
 */

 function solution(n) {
    var answer = new Array(18).fill(0);
    var num = n;
    for (let i = 18; i > -1; i--) {
        const powNum = Math.pow(3, i);
        if (i === 0) {
            answer[i] === num;  
        } if (num >= powNum * 2) {
            answer[i] = 2;
            num-=powNum*2;
        } else if (num >= powNum) {
            answer[i] = 1;
            num-=powNum;
        }
    }       
    answer.reverse();
    while (true) {
        answer = answer.slice(answer.findIndex(item => item > 0));
        if (answer.indexOf(0) === -1) {
            break;
        }
        for (let i=1; i<answer.length; i++) {
            if (answer[i-1] > 0 && answer[i] === 0) {
                answer[i-1]-=1;
                answer[i] = 3;
            }
        }    
    }
    return answer.filter(item => item !==0).map(item => {
        if (item === 3) return 4;
        else return item;
    }).join("");
}