/**
 * 방금그곡.js
 * https://programmers.co.kr/learn/courses/30/lessons/17683?language=javascript
 */

function solution(m, musicinfos) {
    let maxTime = 0;

    const resultIdx = musicinfos.map((info) => {
        const [start, end, name, scale] = info.split(",");
        const time = calcTime(start, end);
        const scaleArr = [...scale.match(/([A-G]#?)/g)];

        const sRepeat = Math.floor(time / (scaleArr.length));
        const sRemainder = time % (scaleArr.length);

        return { time, repeatedScale: scale.repeat(sRepeat) + scaleArr.slice(0, sRemainder).join("") };
    }).reduce((acc, { time, repeatedScale }, index) => {
        const mArr = [...m.match(/([A-G]#?)/g)];
        const scaleArr = [...repeatedScale.match(/([A-G]#?)/g)];

        if (scaleArr.reduce((idxArr, scale, idx) => {
            if (scale === mArr[0]) idxArr.push(idx);
            return idxArr;
        }, []).some((startIdx) => mArr.every((m, idx) => m === scaleArr[startIdx + idx]))) {
            acc.push({ time, index });
            maxTime = Math.max(maxTime, time);
        }

        return acc;
    }, []).filter((item) => item.time === maxTime).sort((a, b) => a.index - b.index)[0];
    
    if (!resultIdx) return "(None)";
    return musicinfos[resultIdx.index].split(",")[2];
}

function calcTime(start, end) {
    const [sHour, sMinute] = start.split(":").map((item) => parseInt(item));
    const [eHour, eMinute] = end.split(":").map((item) => parseInt(item));
    if (eHour < sHour) eHour += 24;
    if (eMinute < sMinute) {
        eMinute += 60;
        eHour -= 1;
    }

    return (eHour - sHour) * 60 + (eMinute - sMinute);
}

module.exports = solution;