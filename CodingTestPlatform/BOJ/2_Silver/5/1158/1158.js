/**
 * 요세푸스 문제 = 11866 요세푸스 문제 0 과 동일
 * Silver5
 * https://www.acmicpc.net/problem/1158
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(node) {
        this.head = node || null;
        this.tail = node || null;
        this.size = 0;
    }

    enqueue(val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        if (this.tail !== node) {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.size++;
    }

    dequeue() {
        if (this.head === null) return null;
        const temp = this.head;
        this.head = temp.next;
        this.size--;
        return temp.val;
    }
}

const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map((c) => parseInt(c));

const q = new Queue();
const result = [];

for (let i = 1; i <= N; i++) {
    q.enqueue(i);
}

while (q.size > 0) {
    for (let j = 0; j < K - 1; j++) {
        q.enqueue(q.dequeue());
    }
    result.push(q.dequeue());
}

console.log(`<${result.join(", ")}>`);