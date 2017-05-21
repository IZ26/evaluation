##title       : Evaluation SQL
##description : SQL evaluation
##author      : Ilan Zerdoun
##date        : 2017/05/19
##version     : 0.1

#Create Database
CREATE DATABASE evaluation;

#USE Database
USE evaluation;

#Create table students
CREATE TABLE students(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(128),
    lastname VARCHAR(128),
    age INT,
    class VARCHAR(128),
    gender VARCHAR(1)
);

#Create table marks
CREATE TABLE marks(
    id INT PRIMARY KEY AUTO_INCREMENT NOT  NULL,
    student INT,
    mark INT(2)
);

##Insert into table students 1 row##
INSERT INTO students(firstname,lastname,age,class,gender)
VALUES('Ilan','Zerdoun',23,'Dev1','M');
