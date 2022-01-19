/**
 * 스택
 * https://www.acmicpc.net/problem/10828
 */

 class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this._top = null;
        this._size = 0;
    }

    push(val) {
        const node = new Node(val);

        if (this._top === null) {
            this._top = node;
        } else {
            node.next = this._top;
            this._top = node;
        }

        this._size++;
        return null;
    }

    pop() {
        if (this._top === null) return -1;
        
        const temp = this._top;
        this._top = this._top.next;
        
        this._size--;
        return temp.val;
    }

    size() {
        return this._size;
    }

    empty() {
        return this._size === 0 ? 1 : 0;
    }

    top() {
        return this._top ? this._top.val : -1;
    }
}

const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const stk = new Stack(), result = [];

input.forEach((v) => {
    const [command, val] = v.split(" ");
    const num = (val !== undefined) ? stk[command](val) : stk[command]();
    if (num !== null) result.push(num);
});

console.log(result.join("\n"));