/*
    없어진기록찾기.sql
    https://programmers.co.kr/learn/courses/30/lessons/59042?language=mysql
*/

-- 코드를 입력하세요
SELECT 
    ANIMAL_OUTS.ANIMAL_ID, ANIMAL_OUTS.NAME 
FROM 
    ANIMAL_INS RIGHT OUTER JOIN ANIMAL_OUTS 
ON 
    ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID 
WHERE 
    ANIMAL_INS.ANIMAL_ID IS NULL 
ORDER BY 
    ANIMAL_OUTS.ANIMAL_ID ASC