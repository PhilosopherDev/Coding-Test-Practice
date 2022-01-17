/**
 * 1920 수 찾기
 * https://www.acmicpc.net/problem/1920
 * console.log 조심해서 사용하자. 엄청 자원 잡아먹어서 시간 초과 난다.
 */

// /** 배열, 시간 초과 */
// function solution(input) {
//     const n = input[1].split(" "), M = parseInt(input[2]), m = input[3].split(" ");

//     for (let i = 0; i < M; i++) {
//         n.indexOf(m[i]) > -1 ? console.log(1) : console.log(0);
//     }
// }


// /** Set, 시간 초과 */
// function solution(input) {
//     const n = new Set(input[1].split(" ")), M = parseInt(input[2]), m = input[3].split(" ");

//     for (let i = 0; i < M; i++) {
//         n.has(m[i]) ? console.log(1) : console.log(0);
//     }
// }

/** Hash, 시간 초과 */
// function solution(input) {
//     const N = parseInt(input[0]), n = input[1].split(" "), M = parseInt(input[2]), m = input[3].split(" ");
//     const nHash = {};

//     for (let i = 0; i < N; i++) {
//         if (!nHash[n[i]]) nHash[n[i]] = true;
//     }

//     for (let j = 0; j < M; j++) {
//         nHash[m[j]] === true ? console.log(1) : console.log(0);
//     }
// }

/** Regexp, 시간 초과 */
// function solution(input) {
//     const n = input[1], M = parseInt(input[2]), m = input[3].split(" ");

//     for (let i = 0; i < M; i++) {
//         const reg = new RegExp(m[i], 'i');

//         n.match(reg) ? console.log(1) : console.log(0);
//     }
// }

/** Hash, 성공*/
// function solution(input) {
//     const N = parseInt(input[0]), n = input[1].split(" "), M = parseInt(input[2]), m = input[3].split(" ");
//     const nHash = {};
//     let result = [];

//     for (let i = 0; i < N; i++) {
//         if (!nHash[n[i]]) nHash[n[i]] = true;
//     }

//     for (let j = 0; j < M; j++) {
//         nHash[m[j]] === true ? result.push(1) : result.push(0);
//     }

//     return result.join('\n');
// }

/** Set, 성공 */
// function solution(input) {
//     const n = new Set(input[1].split(" ")), M = parseInt(input[2]), m = input[3].split(" ");
//     let result = [];
    
//     for (let i = 0; i < M; i++) {
//         n.has(m[i]) ? result.push(1) : result.push(0);
//     }
    
//     return result.join('\n');
// }

/** Binary Search, 성공! */
function solution(input) {
    const N = parseInt(input[0]), n = input[1].split(" ").map((num) => parseInt(num)).sort((a, b) => a - b), M = parseInt(input[2]), m = input[3].split(" ").map((char) => parseInt(char));
    let result = [];

    const binarySearch = (arr, start, end, val) => {
        if (start > end) return false;
        
        const mid = Math.ceil((start + end) / 2);
        if (arr[mid] === val) {
            return true;
        } else if (val < arr[mid]) {
            return binarySearch(arr, start, mid - 1, val);
        } else {
            return binarySearch(arr, mid + 1, end, val);
        }
    }

    m.forEach((num) => binarySearch(n, 0, n.length - 1, num) ? result.push(1) : result.push(0));
    // console.log(result.join('\n'));
    return result.join('\n');
}

module.exports = solution;
