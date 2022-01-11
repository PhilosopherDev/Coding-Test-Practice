/**
 * 141_LinkedListCycle.test.js
 * @param {ListNode} head
 * @return {boolean}
 */

const { hasCycle } = require('./141_LinkedListCycle');
const { makeSinglyLinkedListFromArray } = require('../../../../Preset/LinkedList/LinkedList.helper');

test('head = [3,2,0,-4], pos = 1 => true', () => {
    const head = makeSinglyLinkedListFromArray([3,2,0,-4], 1);
    expect(hasCycle(head)).toBe(true); 
});


test('head = [1,2], pos = 0 => true', () => {
    const head = makeSinglyLinkedListFromArray([1, 2], 0);
    expect(hasCycle(head)).toBe(true);    
});

test('head = [1], pos = -1 => false', () => {
    const head = makeSinglyLinkedListFromArray([1], -1);
    expect(hasCycle(head)).toBe(false);    
});

