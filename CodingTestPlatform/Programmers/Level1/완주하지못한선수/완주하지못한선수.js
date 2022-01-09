/**
 * 완주하지못한선수.js
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
 */

function solution(participant, completion) {
    var answer = '';
    participant.some((name) => {
        const index = completion.indexOf(name);
        if (index > -1) {
            completion.splice(index, 1);
            return false;
        } else {
            answer = name;
            return true;
        }
    });
    return answer;
}

function solution2(participant, completion) {
    var answer = '';
    const cObj = completion.reduce((obj, name) => {
        if (!obj[name]) {
            obj[name] = 1;
        } else {
            obj[name]++;
        }
        return obj;
    }, {});
   
    participant.some((name) => {
        if (!cObj[name]) {
            answer = name;
            return true;
        } else {
            cObj[name]--;
            return false;
        }
    });
    return answer;
}