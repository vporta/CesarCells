CREATE DATABASE cesarcells_db;
USE cesarcells_db;

CREATE TABLE users
(
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password_hash varchar(255) NOT NULL,
  birth_day int NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE details
(
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  age int NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE user_trials
(
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  trial_id int NOT NULL,
  qualification BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

CREATE TABLE trials
(
  id int NOT NULL AUTO_INCREMENT,
  status varchar(50) NOT NULL,
  name varchar(500) NOT NULL,
  interventions varchar(500) NOT NULL,
  url varchar(500) NOT NULL,
  min_age_req int NOT NULL,
  max_age_req int NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE conditions
(
  id int NOT NULL AUTO_INCREMENT,
  conditionsDisease varchar(255) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE conditions_trials
(
  trial_id int NOT NULL,
  condition_id int NOT NULL
);

CREATE TABLE user_conditions
(
  user_id int NOT NULL,
  condition_id int NOT NULL
);

CREATE TABLE questions
(
  id int NOT NULL AUTO_INCREMENT,
  trial_id int NOT NULL,
  question varchar(900) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE question_trials
(
  question_id int NOT NULL,
  trial_id int NOT NULL
);