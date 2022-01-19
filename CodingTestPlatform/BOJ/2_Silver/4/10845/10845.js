/**
 * 큐
 * Silver4
 * https://www.acmicpc.net/problem/10845
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    push(val) {
        const node = new Node(val);
        if (this._head === null) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            this._tail = node;
        }

        this._size++;
        return null;
    }

    pop() {
        if (this._head === null) return -1;

        const temp = this._head;
        this._head = this._head.next;
        if (this._head === null) {
            this._tail = null;
        }
        
        this._size--;
        return temp.val;
    }

    size() {
        return this._size;
    }

    empty() {
        return this._size === 0 ? 1 : 0;
    }

    front() {
        return this._head ? this._head.val : -1;
    }

    back() {
        return this._tail ? this._tail.val : -1;
    }
}

const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const q = new Queue(), result = [];

input.forEach((v) => {
    const [command, val] = v.split(" ");
    const num = (val !== undefined) ? q[command](val) : q[command]();
    if (num !== null) result.push(num);
});

console.log(result.join("\n"));