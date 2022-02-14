/**
 * 메뉴리뉴얼.js
 * https://programmers.co.kr/learn/courses/30/lessons/72411?language=javascript
 */

function solution(orders, course) {
    const answer = [];
    const orderMap = course.reduce((obj, num) => {
        obj[num] = { max: 0, orderComb: {}};
        return obj;
    }, {});
    
    course.forEach((num) => {
        orders.forEach((order) => {
            getCombinations(order.split(""), num).forEach((orderCombinated) => {
                const val = orderCombinated.sort().join("");
                if (!orderMap[num]["orderComb"][val]) {
                    orderMap[num]["orderComb"][val] = 1;
                } else {
                    orderMap[num]["orderComb"][val]++;
                }

                orderMap[num].max = Math.max(orderMap[num].max, orderMap[num]["orderComb"][val]);
            });
        });
    });

    Object.keys(orderMap).forEach((num) => {
        answer.push(...Object.keys(orderMap[num]["orderComb"]).filter((order) => orderMap[num].max > 1 && orderMap[num]["orderComb"][order] === orderMap[num].max));
    });

    return answer.sort();
}

const getCombinations = (array, selectNumber) => {
    const results = [];
    if(selectNumber === 1){
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

module.exports = solution;