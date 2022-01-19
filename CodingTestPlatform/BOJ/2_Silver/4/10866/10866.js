/**
 * 덱
 * Silver4
 * https://www.acmicpc.net/problem/10866
 */

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    push_front(val) {
        const node = new Node(val);
        if (this._head === null) {
            this._head = node;
            this._tail = node;
        } else {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        }        
        this._size++;
        return null;
    }

    push_back(val) {
        const node = new Node(val);
        if (this._tail === null) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this._size++;
        return null;
    }

    pop_front() {
        if (this._head === null) return -1;
        const temp = this._head;
        const val = temp.val;
        this._head = temp.next;
        if (this._head === null) {
            this._tail = null;
        } else if (this._head === this._tail) {
            this._head.prev = null;
            this._tail.next = null;
        }
        this._size--;
        
        return val;
    }

    pop_back() {
        if (this._tail === null) return -1;
        const temp = this._tail;
        const val = temp.val;
        this._tail = this._tail.prev;
        if (this._tail === null) {
            this._head = null;
        } else if (this._head === this._tail) {
            this._head.prev = null;
            this._tail.next = null;
        }
        this._size--;
        
        return val;
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

const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const d = new Deque(), result = [];

input.forEach((v) => {
    const [command, num] = v.split(" ");
    const val = (num !== undefined) ? d[command](num) : d[command]();
    if (val !== null) result.push(val);
});

console.log(result.join('\n'));