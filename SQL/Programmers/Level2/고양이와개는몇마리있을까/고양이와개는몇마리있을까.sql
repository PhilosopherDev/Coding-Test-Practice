/*
    고양이와개는몇마리있을까.sql
    https://programmers.co.kr/learn/courses/30/lessons/59040?language=mysql
*/

SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE) AS count FROM ANIMAL_INS GROUP BY ANIMAL_TYPE ORDER BY ANIMAL_TYPE ASC;