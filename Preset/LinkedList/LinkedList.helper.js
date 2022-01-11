/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {Array} arr 
 * @param {Index Number} tailNextPos 
 * @returns 
 */

function makeSinglyLinkedListFromArray(arr, tailNextPos) {
    const len = arr.length;
    let head, tail, curr;
    arr.forEach((val, idx) => {
        const node = new ListNode(val);
        if (idx === 0) head = node;
        if (idx === len - 1) tail = node;
        if (curr) curr.next = node;
        curr = node;        
    });

    if (tailNextPos > -1 && tailNextPos < len) {
        let tmp = head;
        for (let i = 0; i <= tailNextPos; i++) {
            tmp = head.next;
        }
        tail.next = tmp;
    }

    return head;
}

module.exports = { makeSinglyLinkedListFromArray };