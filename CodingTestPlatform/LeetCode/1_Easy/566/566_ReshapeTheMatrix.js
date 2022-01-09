/**
 * 566_ReshapeTheMatrix.js
 * Easy
 * https://leetcode.com/problems/reshape-the-matrix/
 */

var matrixReshape = function(mat, r, c) {
    if (mat[0].length * mat.length !== r * c) return mat;

    let temp = [];
    mat.forEach((subArr) => temp = temp.concat(subArr));

    const answer = [[]];

    temp.forEach((val) => {
        if (answer[answer.length - 1].length === c) answer.push([]);
        answer[answer.length - 1].push(val);
    });

    return answer;
};

// Array.prototype.flat()
var matrixReshape2 = function(mat, r, c) {
    if (mat[0].length * mat.length !== r * c) return mat;

    const flatArr = mat.flat(), answer = [[]];

    flatArr.forEach((val) => {
        if (answer[answer.length - 1].length === c) answer.push([]);
        answer[answer.length - 1].push(val);
    });

    return answer;
};

module.exports.matrixReshape = matrixReshape2;