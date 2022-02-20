/**
 * 뉴스클러스터링.js
 * https://programmers.co.kr/learn/courses/30/lessons/17677?language=javascript
 */

function solution(str1, str2) {
    const arr1 = sliceByTwo(str1);
    const arr2 = sliceByTwo(str2);
    
    return Math.floor(getJaccardSimilarity(arr1, arr2) * 65536);
}

function sliceByTwo(str) {
    const upStr = str.toUpperCase();
    const arr = [];
    for (let i = 0; i < upStr.length - 1; i++) {
        const slicedStr = upStr.slice(i, i + 2);
        if (slicedStr.match(/[^A-Z]/g) === null) arr.push(slicedStr);
    }
    return arr;
}

function getJaccardSimilarity(arr1, arr2) {
    let intersectionNum = 0, unionNum = 0;

    const hash1 = arr1.reduce(makeHash, {});
    const hash2 = arr2.reduce(makeHash, {});

    const inter = getUniqueIntersection(arr1, arr2);
    const union = getUniqueUnion(arr1, arr2);

    inter.forEach((item) => {
        intersectionNum += Math.min(hash1[item] ? hash1[item] : 0, hash2[item] ? hash2[item] : 0);
    });

    union.forEach((item) => {
        unionNum += Math.max(hash1[item] ? hash1[item] : 0, hash2[item] ? hash2[item] : 0);
    });

    if (intersectionNum === unionNum) return 1;
    return intersectionNum / unionNum;
}

function getUniqueIntersection(arr1, arr2) {
    return [...new Set(arr1.filter((str) => arr2.indexOf(str) > -1))];
}

function getUniqueUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

function makeHash(obj, str) {
    if (!obj[str]) {
        obj[str] = 1;
    } else {
        obj[str]++;
    }

    return obj;
}

module.exports = solution;