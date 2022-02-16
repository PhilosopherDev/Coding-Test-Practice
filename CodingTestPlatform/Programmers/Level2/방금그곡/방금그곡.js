/**
 * 방금그곡.js
 * https://programmers.co.kr/learn/courses/30/lessons/17683?language=javascript
 */

function solution(m, musicinfos) {
    const resultArr = musicinfos.map((info) => {
        const [start, end, name, scale] = info.split(",");
        const time = calcTime(start, end);
        const scaleArr = replaceStr(scale).split("");

        const sRepeat = Math.floor(time / (scaleArr.length));
        const sRemainder = time % (scaleArr.length);
        const repeatedScale = scaleArr.join("").repeat(sRepeat) + scaleArr.slice(0, sRemainder).join("")

        return [time, repeatedScale, name];
    }).filter((item) => item[1].indexOf(replaceStr(m)) > -1).sort((a, b) => b[0] - a[0]);
    
    if (!resultArr.length) return "(None)";
    
    return resultArr[0][2];
}

function solution2(m, musicinfos) {
    const resultArr = musicinfos.map((info) => {
        const [start, end, name, scale] = info.split(",");
        const time = calcTime(start, end);
        const scaleArr = replaceStr(scale).split("");

        const sRepeat = Math.floor(time / (scaleArr.length));
        const sRemainder = time % (scaleArr.length);
        const repeatedScale = scaleArr.join("").repeat(sRepeat) + scaleArr.slice(0, sRemainder).join("")

        return { time, repeatedScale, name };
    }).filter((item) => item.repeatedScale.indexOf(replaceStr(m)) > -1).sort((a, b) => b.time - a.time);
    
    if (!resultArr.length) return "(None)";
    
    return resultArr[0].name;
}

function calcTime(start, end) {
    const [sHour, sMinute] = start.split(":").map((item) => parseInt(item));
    const [eHour, eMinute] = end.split(":").map((item) => parseInt(item));

    return (eHour - sHour) * 60 + (eMinute - sMinute);
}

function replaceStr(str) {
    return str.replace(/C#/g, "c").replace(/D#/g, "d").replace(/F#/g, "f").replace(/G#/g, "g").replace(/A#/g, "a");
}

module.exports = solution2;