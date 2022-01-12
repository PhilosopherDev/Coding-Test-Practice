const PLATFORM = {
    PROGRAMMERS: "programmers",
    LEETCODE: "leetcode",
    BOJ: "boj"
}

const DIFFICULTY = {
    [PLATFORM.PROGRAMMERS]: {
        LEVEL1: "level1",
        LEVEL2: "level2",
        LEVEL3: "level3"
    },
    [PLATFORM.LEETCODE]: {
        EASY: "easy",
        MEDIUM: "medium",
        HARD: "hard"
    },
    [PLATFORM.BOJ]: {
        BRONZE: {
            "1": "bronze_1",
            "2": "bronze_2",
            "3": "bronze_3",
            "4": "bronze_4",
            "5": "bronze_5"
        }, 
        SILVER: {
            "1": "silver_1",
            "2": "silver_2",
            "3": "silver_3",
            "4": "silver_4",
            "5": "silver_5"
        },
        GOLD: {
            "1": "gold_1",
            "2": "gold_2",
            "3": "gold_3",
            "4": "gold_4",
            "5": "gold_5"
        }
    }
}

const TOPIC = {
    DATA_STRUCTURE: {
        ARRAY: "array",
        LINKED_LIST: "linked_list",
        STACK: "stack",
        QUEUE: "queue",
        HASH: "hash",
        STRING: "string"
    },
    SORTING: "sorting",
    BRUTEFORCE: "bruteforce",
    DFS: "dfs",
    BFS: "bfs",
    GREEDY: "greedy",
    BST: "bst",
    IMPLEMENT: "implement"
}

const LANGUAGE = {
    JAVASCRIPT: "javascript",
    PYTHON: "python"
}

module.exports = { PLATFORM, DIFFICULTY, TOPIC, LANGUAGE};