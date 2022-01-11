/**
 * 141_LinkedListCycle.js
 * Easy
 * https://leetcode.com/problems/linked-list-cycle/
 */

const nodeArr = [];
var hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    if (nodeArr.indexOf(head.next) > -1) return true;
    nodeArr.push(head.next);
    return hasCycle(head.next);
};

var hasCycle2 = function(head) {
    const nodeArr2 = [head];
    let currNode = head;
    while(true) {
        if (currNode === null) break;
        currNode = currNode.next;
        if (nodeArr2.indexOf(currNode) > -1) return true;
        nodeArr2.push(currNode);
    }
    return false;
}

var hasCycle3 = function(head) {
    const nodeSet = new Set();
    let currNode = head;
    while(currNode !== null) {        
        if (nodeSet.has(currNode)) return true;
        nodeSet.add(currNode);
        currNode = currNode.next;
    }
    return false;
}

module.exports.hasCycle = hasCycle3;