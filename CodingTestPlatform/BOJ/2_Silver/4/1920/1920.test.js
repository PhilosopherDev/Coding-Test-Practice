/**
 * 1920.test.js
 */
const solution = require('./1920');

var fs = require('fs'); 
var input = fs.readFileSync('./1920.txt').toString().trim().split("\n");

test('boj 1920 test1', () => {
    expect(solution(input)).toBe('1\n1\n0\n0\n1');
});
