/*
    중복제거하기.sql
    https://programmers.co.kr/learn/courses/30/lessons/59408?language=mysql
*/

SELECT COUNT(DISTINCT NAME) AS count FROM ANIMAL_INS WHERE NAME IS NOT NULL