/**
 * 다트게임.js
 * https://programmers.co.kr/learn/courses/30/lessons/17682
 */

function solution(dartResult) {
    let answer = [];
    const regexp = /(\d+)[S|D|T][*|#]?/g;
    const darts = Array.from(dartResult.matchAll(regexp)).map((val) => val[0]);
    
    for (let i = 0; i < darts.length; i++ ) {
        let point = parseInt(darts[i].match(/(\d+)/)[0]);
        let bonus = darts[i].match(/[S|D|T]/)[0];
        let option = darts[i].match(/[*|#]/) ? darts[i].match(/[*|#]/)[0] : null;
        point = calcBonus(point, bonus);
        if (option) {
            point = calcOption(point, option)
        }
        
        if (option === "*" && i > 0) {
            answer[i - 1] = calcOption(answer[i - 1], option)
        }
        
        answer[i] = point;
    }
    return answer.reduce((acc, item) => acc + item, 0);
}

function calcBonus(point, bonus) {
    switch(bonus) {
        case "S":
            return point;
        case "D":
            return Math.pow(point, 2);
        case "T":
            return Math.pow(point, 3);
    }
}

function calcOption(point, option) {
    switch(option) {
        case "*":
            return 2 * point;    
        case "#":
            return -1 * point;
    }
}