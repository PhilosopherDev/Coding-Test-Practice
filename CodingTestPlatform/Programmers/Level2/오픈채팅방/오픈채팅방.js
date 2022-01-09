/**
 * 오픈채팅방.js
 * Level2
 * https://programmers.co.kr/learn/courses/30/lessons/42888
 */

 function solution(record) {    
    const uidToName = record.reduce((obj, item) => {
        const itemArr = item.split(" ");
        if (!obj[itemArr[1]]) {
            obj[itemArr[1]] = itemArr[2];
        } else if (itemArr[0] === "Enter" || itemArr[0] === "Change") {
            obj[itemArr[1]] = itemArr[2];
        }
        return obj;    
    }, {});

    const answer = record.reduce((arr, item) => {
        const itemArr = item.split(" ");
        if (state[itemArr[0]]) {
            arr.push(`${uidToName[itemArr[1]]}님이 ${state[itemArr[0]]}`);    
        }
        return arr;
    }, []);    
    
    return answer;
}

const state = {
    "Enter": "들어왔습니다.",
    "Leave": "나갔습니다.",
}