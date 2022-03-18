/**
 * 스킬트리.js
 * https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript
 */

function solution(skill, skill_trees) {
    let answer = 0;
    skill_trees.forEach((skillItem) => {
        const idxSkillItem = replaceSkillToIndex(skill, skillItem);
        if (isCorrectSkill(idxSkillItem)) answer++;
    });
    return answer;
}

function replaceSkillToIndex(skill, skillItem) {
    return skillItem.split("").map((c) => skill.indexOf(c)).filter((item) => item !== -1);
}

function isCorrectSkill(skillItem) {
    return skillItem.every((currentItem, idx, arr) => (idx === 0 && currentItem === 0) || currentItem === arr[idx - 1] + 1);
}

module.exports = solution;