/**
 * 크레인인형뽑기게임.js
 * https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
 */

function solution(board, moves) {
    const stk = [];
    let answer = 0;
    moves.forEach((col) => {
        for (let i = 0; i < board.length; i++) {
            const item = board[i][col - 1];            
            if (item > 0) {
                board[i][col - 1] = 0;
                if (stk.length > 0 && stk[stk.length - 1] === item) {
                    stk.pop();
                    answer += 2; // 인형 2개가 만나서 사라지므로 한 번에 2씩 커져야한다. 
                } else {
                    stk.push(item);
                }
                break;
            }
        }
    });

    return answer;
}

module.exports = solution;