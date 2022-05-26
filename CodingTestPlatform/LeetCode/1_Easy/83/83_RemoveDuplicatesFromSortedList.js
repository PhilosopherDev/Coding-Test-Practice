/**
 * Easy
 * 83. Remove Duplicates from Sorted List
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head;
    let p1 = head, p2 = head;
    
    while (p2) {
        while (p2 && p1.val === p2.val) {
            p2 = p2.next;
        }
        p1.next = p2;
        p1 = p2;
    }
    
    return head;
};