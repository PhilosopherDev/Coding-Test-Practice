/**
 * 재귀함수
 */

function solution(n) {
    DFS(n)
}

function DFS(level) {
    if (level === 0) return;
    DFS(level - 1);
    console.log(level);
}

solution(3);