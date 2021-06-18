CREATE DATABASE IF NOT EXISTS unac_virtual_tracking;

USE unac_virtual_tracking;
show databases;

CREATE TABLE subjetc (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  credits INT(2) DEFAULT NULL,
  semester INT(2) DEFAULT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE materia (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(11) DEFAULT NULL,
  PRIMARY KEY(id)
);

DESCRIBE user;
DESCRIBE subject;

INSERT INTO user values
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMillan', 40000),
  (3, 'John Carter', 50000);

SELECT * FROM user;
SELECT * FROM subject;