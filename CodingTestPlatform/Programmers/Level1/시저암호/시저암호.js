/**
 * 시저암호.js
 * https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript
 */

function solution(s, n) {
    return s.split("").map((char) => {
        return applyCaesarCipher(char, n);
    }).join("");
}

function applyCaesarCipher(char, n) {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
        let newCode = code + n;
        if (newCode > 90) {
            newCode -= 26;
        }
        return String.fromCharCode(newCode);
    } else if (code >= 97 && code <= 122) {
        let newCode = code + n;
        if (newCode > 122) {
            newCode -= 26;
        }
        return String.fromCharCode(newCode);
    } else {
        return char;
    }
}

module.exports = solution;