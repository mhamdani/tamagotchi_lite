### Schema

DROP DATABASE IF EXISTS tamagotchi_db;
CREATE DATABASE tamagotchi_db;
USE tamagotchi_db;

CREATE TABLE actions
(
	id int NOT NULL AUTO_INCREMENT,
	description varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
