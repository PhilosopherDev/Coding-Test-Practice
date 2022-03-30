/**
 * 삼각달팽이.js
 * https://programmers.co.kr/learn/courses/30/lessons/68645?language=javascript
 */

const LEFTDOWN = 1, GORIGHT = 2, LEFTUP = 3;

function solution(n) {
    const arr = [];
    
    for (let i = 1; i <=n; i++) {
        arr.push(new Array(i).fill(-1));
    }
    
    let row = 0, col = 0, state = LEFTDOWN;
    for (let j = 1; j <= (n * (n + 1)) / 2; j++) {
        arr[row][col] = j;
        
        if (state === LEFTDOWN && (!Array.isArray(arr[row + 1]) || (Array.isArray(arr[row + 1]) && arr[row + 1][col] > 0))) {
            state = GORIGHT;
        } else if (state === GORIGHT && (arr[row][col + 1] === undefined || arr[row][col + 1] > 0)) {
            state = LEFTUP
        } else if (state === LEFTUP && arr[row - 1][col - 1] > 0) {
            state = LEFTDOWN
        }
        
        if (state === LEFTDOWN) {
            row++;
        } else if (state === GORIGHT) {
            col++;
        } else if (state === LEFTUP) {
            row--;
            col--;
        }
    }
     
    return arr.flat();
}

module.exports = solution;