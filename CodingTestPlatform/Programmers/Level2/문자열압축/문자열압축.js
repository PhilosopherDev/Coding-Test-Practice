/**
 * 문자열압축.js
 * Level2
 * https://programmers.co.kr/learn/courses/30/lessons/60057
 */

 function solution(s) {
    if (s.length === 1) return 1;
    // make data 
    var length = Math.floor(s.length/2);
    var data = new Array(length).fill(null).map(() => new Array());
    
    for (let i = 1; i <= length; i++) {
        for (let j = 0; j < s.length; j += i) {
            data[i-1].push(s.substr(j, i))
        }
    }

    // compression
    var answer = data.map((arr) => {
        let num = 1; 
        return arr.reduce((acc, char, idx, org) => {
            if (org[idx+1] === char) {
                num++;
            } else {
                num !== 1 ? acc.push(num, char) : acc.push(char);
                num = 1;
            }
            return acc;
        }, []).join("").length;
    });

    // return min length
    return Math.min(...answer);
}