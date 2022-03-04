/**
 * 후보키.js
 * https://programmers.co.kr/learn/courses/30/lessons/42890?language=javascript
 */

function solution(relation) {
    const rotated = rotateRelation(relation);
    const combinationArr = new Array(relation.length).fill(null).map((val, idx) => idx).map((val, idx, array) => getCombinations(array, idx + 1).map((item) => item.join("")));
    
}


/** 완전 탐색 - 테스트 1, 2, 3, 4, 9, 11, 13, 18, 19, 20, 23, 24, 25 실패 */
function solution2(relation) {
    const rotated = rotateRelation(relation);
    const combinationArr = new Array(relation.length).fill(null).map((val, idx) => idx).map((val, idx, array) => getCombinations(array, idx + 1).map((item) => item.join("")));
    const all = findAllCandidateKey(combinationArr, rotated);
    const answer = checkMinimal(all);

    return answer.length;
}

function rotateRelation(relation) {
    const newArr = new Array(relation[0].length).fill(null).map(() => new Array);

    for (let i = 0; i < relation.length; i++) {
        for (let j = 0; j < relation[i].length; j++) {
            newArr[j].push(relation[i][j]);
        }
    }

    return newArr;
}

function findAllCandidateKey(combinationArr, rotated) {
    const allCandidateKey = [];
    combinationArr.forEach((combination, idx) => {
        combination.forEach((idxStr) => {
            const set = new Set(combineValue(idxStr.split(""), rotated));  
            if (set.size === rotated[0].length) allCandidateKey.push(idxStr);
        });
    });
    return allCandidateKey;
}

function combineValue(idxArr, rotated) {
    const newArr = [];
    
    for (let i = 0; i < rotated[0].length; i++) {
        const combinedValue = idxArr.reduce((str, idx) => {
            str += rotated[idx][i];
            return str;
        }, "");
        newArr.push(combinedValue);
    }

    return newArr;
}

function checkMinimal(all) {
    const checked = [];
    let filterdArr = all;
    
    while (true) {
        const beforeLength = filterdArr.length;
        if (filterdArr.every(item => checked.indexOf(item) > -1)) break;
        for (let i = 0; i < beforeLength; i++) {
            const checker = filterdArr[i];
            checked.push(checker);
            filterdArr = filterdArr.filter((value) => checked.indexOf(value) > -1 || value.length === 1 || (checker.length < value.length && value.indexOf(checker) === -1));
            if (filterdArr.length !== beforeLength) break;
        };
        
    }

    return filterdArr;
}

function getCombinations(array, selectNumber) {
    const results = [];
    if(selectNumber === 1){
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

module.exports = solution;