/**
 * 566_ReshapeTheMatrix.test.js
 */

const { matrixReshape } = require("./566_ReshapeTheMatrix");

test('[[1,2],[3,4]], 1, 4', () => {
   expect(matrixReshape([[1,2],[3,4]], 1, 4)).toEqual([[1,2, 3,4]]);
});

test('[[1,2],[3,4]], 2, 4', () => {
    expect(matrixReshape([[1,2],[3,4]], 2, 4)).toEqual([[1,2],[3,4]]);
 });
