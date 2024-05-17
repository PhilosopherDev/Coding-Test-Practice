/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const memoize = { 1: 1, 2: 2 };

    const getStep = (n) => {
        if (memoize[n]) {
            return memoize[n];
        } else {
            memoize[n] = getStep(n - 1) + getStep(n - 2);

            return memoize[n];
        }
    }

    return getStep(n);
};