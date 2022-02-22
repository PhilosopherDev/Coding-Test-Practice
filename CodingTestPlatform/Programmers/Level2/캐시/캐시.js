/**
 * 캐시.js
 * https://programmers.co.kr/learn/courses/30/lessons/17680?language=javascript
 */

const MISS = 5, HIT = 1; // 1

function solution(cacheSize, cities) {
    if (cacheSize === 0) return MISS * cities.length; // 2
    
    let answer = 0;
    const cache = [];
    cities
        .map((city) => city.toLowerCase()) // 3
        .forEach((city) => { 
            const cityIdx = cache.indexOf(city);

            if (cityIdx > -1) {
                answer += HIT; // 4
                cache.splice(cityIdx, 1); // 5
            } else {
                answer += MISS; // 6
                if (cache.length === cacheSize) cache.shift(); // 7
            } 
            
            cache.push(city); // 8
        });

    return answer; // 9
}

module.exports = solution;