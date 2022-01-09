/**
 * 최소직사각형.js
 * Level1
 * https://programmers.co.kr/learn/courses/30/lessons/86491
 */

 function solution(sizes) {
    var maxOfMax = 0, maxOfMin = 0;
    
    sizes.forEach((size) => {
        maxOfMax = Math.max(maxOfMax, Math.max(...size));
        maxOfMin = Math.max(maxOfMin, Math.min(...size));
    });
    
    return maxOfMax * maxOfMin;
}