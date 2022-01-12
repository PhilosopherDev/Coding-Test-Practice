const fs = require('fs');
const { PLATFORM, DIFFICULTY, TOPIC, LANGUAGE } = require('./Types');

/**
    {
        "id": "",
        "name": "",
        "platform": PLATFORM,
        "difficulty": DIFFICULTY,        
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {
            "blog": "",
            "github": ""
        }        
    },
 */

const solvedProblem = [
    {
        "id": "_0viyqfp",
        "name": "위장",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DATA_STRUCTURE.HASH],
        "url": {            
            "blog": "https://philosopherprogrammer.com/86",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%9C%84%EC%9E%A5"
        }        
    },
    {
        "id": "_71tjp1e",
        "name": "문자열 압축",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DATA_STRUCTURE.STRING],
        "url": {            
            "blog": "https://philosopherprogrammer.com/40",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EB%AC%B8%EC%9E%90%EC%97%B4%EC%95%95%EC%B6%95"
        }        
    },
    {
        "id": "_1r9n3cy",
        "name": "오픈채팅방",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DATA_STRUCTURE.HASH],
        "url": {            
            "blog": "https://philosopherprogrammer.com/41",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%98%A4%ED%94%88%EC%B1%84%ED%8C%85%EB%B0%A9"
        }        
    },
    {
        "id": "_g14do6z",
        "name": "124 나라의 숫자",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.IMPLEMENT],
        "url": {            
            "blog": "https://philosopherprogrammer.com/39",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/124%EB%82%98%EB%9D%BC%EC%9D%98%EC%88%AB%EC%9E%90"
        }        
    },
    {
        "id": "_9dcthrp",
        "name": "기능개발",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DATA_STRUCTURE.STACK, TOPIC.DATA_STRUCTURE.QUEUE],
        "url": {            
            "blog": "https://philosopherprogrammer.com/15",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EA%B8%B0%EB%8A%A5%EA%B0%9C%EB%B0%9C"
        }        
    },
    {
        "id": "_1r5knqx",
        "name": "타겟 넘버",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DFS, TOPIC.BFS],
        "url": {            
            "blog": "https://philosopherprogrammer.com/38",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%ED%83%80%EA%B2%9F%EB%84%98%EB%B2%84"
        }        
    },
    {
        "id": "_0ru5rxa",
        "name": "짝지어 제거하기",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DATA_STRUCTURE.STACK],
        "url": {            
            "blog": "https://philosopherprogrammer.com/37",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%A7%9D%EC%A7%80%EC%96%B4%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0"
        }        
    },
    {
        "id": "_der0deq",
        "name": "프린터",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DATA_STRUCTURE.QUEUE],
        "url": {            
            "blog": "https://philosopherprogrammer.com/49",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%ED%94%84%EB%A6%B0%ED%84%B0"
        }        
    },
    {
        "id": "_vbfjyvl",
        "name": "가장 큰 수",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.SORTING],
        "url": {            
            "blog": "https://philosopherprogrammer.com/53",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EA%B0%80%EC%9E%A5%20%ED%81%B0%20%EC%88%98"
        }        
    },
    {
        "id": "_06r1ho3",
        "name": "소수 찾기",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.BRUTEFORCE],
        "url": {            
            "blog": "https://philosopherprogrammer.com/48",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%86%8C%EC%88%98%EC%B0%BE%EA%B8%B0"
        }        
    },
    {
        "id": "_0zrm6wp",
        "name": "다리를 지나는 트럭",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DATA_STRUCTURE.QUEUE],
        "url": {            
            "blog": "https://philosopherprogrammer.com/50",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EB%8B%A4%EB%A6%AC%EB%A5%BC%EC%A7%80%EB%82%98%EB%8A%94%ED%8A%B8%EB%9F%AD"
        }        
    },
    {
        "id": "_s9zhz6b",
        "name": "H-Index",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.SORTING],
        "url": {            
            "blog": "https://philosopherprogrammer.com/54",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/H-Index"
        }        
    },
    {
        "id": "_gm0hstg",
        "name": "카펫",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.BRUTEFORCE],
        "url": {            
            "blog": "https://philosopherprogrammer.com/46",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%B9%B4%ED%8E%AB"
        }        
    },
    {
        "id": "_j2kmc5j",
        "name": "큰 수 만들기",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.GREEDY],
        "url": {            
            "blog": "https://philosopherprogrammer.com/69",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%ED%81%B0%EC%88%98%EB%A7%8C%EB%93%A4%EA%B8%B0"
        }        
    },
    {
        "id": "_mexl2gj",
        "name": "구명보트",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.GREEDY],
        "url": {            
            "blog": "https://philosopherprogrammer.com/70",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8"
        }        
    },
    {
        "id": "_lu2j0t7",
        "name": "로또의 최고 순위와 최저 순위",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.IMPLEMENT],
        "url": {            
            "blog": "https://philosopherprogrammer.com/44",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%A1%9C%EB%98%90%EC%9D%98%EC%B5%9C%EA%B3%A0%EC%88%9C%EC%9C%84%EC%99%80%EC%B5%9C%EC%A0%80%EC%88%9C%EC%9C%84"
        }        
    },
    {
        "id": "_iikzzl4",
        "name": "숫자 문자열과 영단어",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DATA_STRUCTURE.STRING, TOPIC.DATA_STRUCTURE.ARRAY],
        "url": {            
            "blog": "https://philosopherprogrammer.com/45",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%88%AB%EC%9E%90%EB%AC%B8%EC%9E%90%EC%97%B4%EA%B3%BC%EC%98%81%EB%8B%A8%EC%96%B4"
        }        
    },
    {
        "id": "_5tvrf7k",
        "name": "없는 숫자 더하기",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.IMPLEMENT],
        "url": {            
            "blog": "https://philosopherprogrammer.com/52",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%97%86%EB%8A%94%EC%88%AB%EC%9E%90%EB%8D%94%ED%95%98%EA%B8%B0"
        }        
    },
    {
        "id": "_a7nh88e",
        "name": "음양 더하기",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DATA_STRUCTURE.ARRAY],
        "url": {            
            "blog": "https://philosopherprogrammer.com/8",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%9D%8C%EC%96%91%EB%8D%94%ED%95%98%EA%B8%B0"
        }        
    },
    {
        "id": "_3h01sl3",
        "name": "완주하지 못한 선수",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.DATA_STRUCTURE.HASH],
        "url": {            
            "blog": "https://philosopherprogrammer.com/7",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80%EB%AA%BB%ED%95%9C%EC%84%A0%EC%88%98"
        }        
    },
    {
        "id": "_xh4fvdm",
        "name": "K번째수",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.SORTING],
        "url": {            
            "blog": "",
            "github": ""
        }        
    },
    {
        "id": "_d9srm2b",
        "name": "모의고사",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.BRUTEFORCE],
        "url": {            
            "blog": "https://philosopherprogrammer.com/47",
            "github": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC"
        }        
    },
    {
        "id": "_dfxs57t",
        "name": "체육복",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [TOPIC.GREEDY],
        "url": {            
            "blog": "",
            "github": ""
        }        
    },
    {
        "id": "_xjhphb0",
        "name": "폰켓몬",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
    {
        "id": "",
        "name": "",
        "platform": PLATFORM.PROGRAMMERS,
        "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
        "language": [LANGUAGE.JAVASCRIPT],
        "topic": [],
        "url": {            
            "blog": "https://philosopherprogrammer.com/",
            "github": ""
        }        
    },
]

// {
//     "id": "",
//     "name": "",
//     "platform": PLATFORM.PROGRAMMERS,
//     "difficulty": DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1,
//     "language": [LANGUAGE.JAVASCRIPT],
//     "topic": [],
//     "url": {            
//         "blog": "https://philosopherprogrammer.com/",
//         "github": ""
//     }        
// },

fs.writeFileSync('dist/SolvedProblem.json', JSON.stringify(solvedProblem));
