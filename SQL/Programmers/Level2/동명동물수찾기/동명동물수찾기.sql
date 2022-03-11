/*
    동명동물수찾기.sql
    https://programmers.co.kr/learn/courses/30/lessons/59041?language=mysql
*/

SELECT NAME, COUNT(ANIMAL_ID) AS CNT FROM ANIMAL_INS GROUP BY NAME HAVING CNT > 1 AND NAME IS NOT NULL ORDER BY NAME;