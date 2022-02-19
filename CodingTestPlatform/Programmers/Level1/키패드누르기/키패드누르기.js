/**
 * 키패드누르기.js
 * https://programmers.co.kr/learn/courses/30/lessons/67256?language=javascript
 */

function solution(numbers, hand) {
    let currLeft = "*", currRight = "#";
    let answer = "";

    numbers.forEach((num) => {
        const rule = staticRule(num);

        if (rule) {
            answer += rule;
            if (rule === "L") {
                currLeft = num;
            } else {
                currRight = num;
            }
        } else {
            const fromLeft = BFS(graph, currLeft, num);
            const fromRight = BFS(graph, currRight, num);

            if (fromLeft === fromRight) {
                if (hand === "left") {
                    answer += "L";
                    currLeft = num;    
                } else {
                    answer += "R";
                    currRight = num;
                }
            } else if (fromLeft < fromRight) {
                answer += "L";
                currLeft = num;
            } else {
                answer += "R";
                currRight = num;
            }
        }
    });

    return answer;
}

function staticRule(num) { 
    switch (num) {
        case 1:
        case 4:
        case 7:
            return "L";
        case 3:
        case 6:
        case 9:
            return "R";
        default:
            return null;
    }
}

const graph = {
    1: [2, 4],
    2: [1, 3, 5],
    3: [2, 6],
    4: [1, 5, 7],
    5: [2, 4, 6, 8],
    6: [3, 5, 9],
    7: [4, 8, "*"],
    8: [5, 7, 9, 0],
    9: [6, 8, "#"],
    0: [8, "*", "#"],
    "*": [7, 0],
    "#": [9, 0]
};

function BFS(graph, startNode, findingNode) {
    const visited = []; 
    let needVisit = [], answer = Infinity; 
    needVisit.push({distance: 0, node: startNode}); 
    while (needVisit.length > 0) {
        const { distance, node } = needVisit.shift();
        if (visited.indexOf(node) === -1) {
            visited.push(node);
            const newNeedVisit = graph[node].map((n) => {
                return { distance: distance + 1, node: n };
            });
            needVisit = [...needVisit, ...newNeedVisit];
        }
        if (node === findingNode) {
            answer = distance;
            break;
        }
    }
    return answer;
};

module.exports = solution;