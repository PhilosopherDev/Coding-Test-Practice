/**
 * 영어끝말잇기.js
 * https://programmers.co.kr/learn/courses/30/lessons/12981?language=javascript
 */

function solution(n, words) {
    const order = checkWrongWordOrder(n, words);
    return order ? [order % n ? order % n : n, Math.ceil(order / n)] : [0, 0];
}

function checkWrongWordOrder(n, words) {
    const length = words.length + words.length % n;
    let order = null;
    
    for (let i = 1; i < length; i++) {
        const idx = i % words.length;
        const beforeWord = words[idx - 1];
        const currWord = words[idx];
        if (beforeWord[beforeWord.length - 1] !== currWord[0] || words.indexOf(words[idx]) !== i) {
            order = idx + 1;
            break;
        }
    }
    return order;
}

function solution2(n , words) {
    const length = words.length + words.length % n;
    let order = null;
    
    for (let i = 1; i < length; i++) {
        const idx = i % words.length;
        const beforeWord = words[idx - 1];
        const currWord = words[idx];
        if (beforeWord[beforeWord.length - 1] !== currWord[0] || words.indexOf(words[idx]) !== i) {
            order = idx + 1;
            break;
        }
    }

    return order ? [order % n ? order % n : n, Math.ceil(order / n)] : [0, 0];
}

module.exports = solution2;