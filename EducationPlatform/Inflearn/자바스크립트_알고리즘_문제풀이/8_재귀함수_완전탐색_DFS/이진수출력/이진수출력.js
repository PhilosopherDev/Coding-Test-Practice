/**
 * 이진수출력.js
 */

function binaryDFS(num) {
    if (num === 0) return "";
    const str = String(num % 2);
    return binaryDFS(Math.floor(num / 2)) + str;
}

module.exports = binaryDFS;