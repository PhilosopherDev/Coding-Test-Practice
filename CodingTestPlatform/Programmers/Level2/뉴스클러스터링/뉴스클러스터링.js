/**
 * 뉴스클러스터링.js
 * https://programmers.co.kr/learn/courses/30/lessons/17677?language=javascript
 * https://philosopherprogrammer.com/100
 */

function solution(str1, str2) {
    const arr1 = sliceByTwo(str1); // 1
    const arr2 = sliceByTwo(str2); // 1
    
    return Math.floor(getJaccardSimilarity(arr1, arr2) * 65536); // 2, 3
}

function sliceByTwo(str) {
    const upStr = str.toUpperCase();
    const arr = [];
    for (let i = 0; i < upStr.length - 1; i++) {
        const slicedStr = upStr.slice(i, i + 2);
        if (slicedStr.match(/[^A-Z]/g) === null) arr.push(slicedStr); // 1-1
    }
    return arr;
}

function getJaccardSimilarity(arr1, arr2) { // 2
    let intersectionNum = 0, unionNum = 0;

    const hash1 = arr1.reduce(makeHash, {}); // 2-1
    const hash2 = arr2.reduce(makeHash, {}); // 2-1

    const inter = getUniqueIntersection(arr1, arr2); // 2-2
    const union = getUniqueUnion(arr1, arr2); // 2-3

    inter.forEach((item) => {
        intersectionNum += Math.min(hash1[item] ? hash1[item] : 0, hash2[item] ? hash2[item] : 0); // 2-4
    });

    union.forEach((item) => {
        unionNum += Math.max(hash1[item] ? hash1[item] : 0, hash2[item] ? hash2[item] : 0); // 2-5
    });

    if (intersectionNum === unionNum) return 1; // 2-6
    return intersectionNum / unionNum; // 2-7
}

function getUniqueIntersection(arr1, arr2) {
    return [...new Set(arr1.filter((str) => arr2.indexOf(str) > -1))]; // 2-2
}

function getUniqueUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]; // 2-3
}

function makeHash(obj, str) { // 2-1
    if (!obj[str]) {
        obj[str] = 1;
    } else {
        obj[str]++;
    }

    return obj;
}

module.exports = solution;