/**
 * 셀프 넘버
 * https://www.acmicpc.net/problem/4673
 */

/** 내림차순 => 성공 */
// const getInfiniteSequence = (num) => {
//     const arr = num.toString().split("");

//     return arr.reduce((acc, char) => acc + parseInt(char), num);
// }

// for (let i = 1; i <= 10000; i++) {    
//     let selfNumber = true;
//     for (let j = i - 1; j > 0; j--) {
//         let num = getInfiniteSequence(j)
//         if (num === i) {
//             selfNumber = false;
//             break;
//         }
//     }
//     if (selfNumber) console.log(i);
// }

/** 오름차순 => 시간 초과 */
// const getInfiniteSequence = (num) => {
//     const arr = num.toString().split("");

//     return arr.reduce((acc, char) => acc + parseInt(char), num);
// }

// for (let i = 1; i <= 10000; i++) {    
//     let selfNumber = true;
//     for (let j = 1; j < i; j++) {
//         let num = getInfiniteSequence(j)
//         if (num === i) {
//             selfNumber = false;
//             break;
//         }
//     }
//     if (selfNumber) console.log(i);
// }

/** 
 * 더 이상 확인하지 않아도 확실히 문제가 없는 지점을 찾아서 최적화 해보자. 
 * 현재 상태에서 Max 일수 있는 값 구해서 해당 값보다 이미 찾으려는 값이 더 크면 끊어주는 방식으로 최적화
 */

const getInfiniteSequence = (num) => {
    const arr = num.toString().split("");

    return arr.reduce((acc, char) => acc + parseInt(char), num);
}

const getMaxLimit = (num) => {
    const arr = num.toString().split("");

    return arr.reduce((acc) => acc + 9, num);
}

for (let i = 1; i <= 10000; i++) {    
    let selfNumber = true;
    for (let j = i - 1; j > 0; j--) {
        let num = getInfiniteSequence(j)
        if (num === i) {
            selfNumber = false;
            break;
        } else if (i > getMaxLimit(j)) {
            break;
        }
    }
    if (selfNumber) console.log(i);
}

