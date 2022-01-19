/**
 * 카드2
 * Silver4
 * https://www.acmicpc.net/problem/2164
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

const N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());

const q = new Queue();

for (let i = 1; i <= N; i++) {
    q.enqueue(i);
}

while (q.size > 1) {
    q.dequeue();
    q.enqueue(q.dequeue());
}

console.log(q.dequeue());