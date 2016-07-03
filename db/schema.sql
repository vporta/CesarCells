CREATE DATABASE cesarcells_db;
USE cesarcells_db;

CREATE TABLE users
(
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password_hash varchar(255) NOT NULL,
  birth_day DATE NOT NULL,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  sex varchar(255) NOT NULL,
  stargardts_diagnosis BOOLEAN NOT false,
  age int NOT NULL,
  informed_consent BOOLEAN NOT false,
  country varchar(255) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
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
  q1 varchar(500) NOT NULL,
  q2 varchar(500) NOT NULL,
  q3 varchar(500) NOT NULL,
  q4 varchar(500) NOT NULL,
  q5 varchar(500) NOT NULL,
  q6 varchar(500) NOT NULL,
  q7 varchar(500) NOT NULL,
  q8 varchar(500) NOT NULL,
  q9 varchar(500) NOT NULL,
  q10 varchar(500) NOT NULL,
  q11 varchar(500) NOT NULL,
  desired_a1 char(1) NOT NULL,
  desired_a2 char(1) NOT NULL,
  desired_a3 char(1) NOT NULL,
  desired_a4 char(1) NOT NULL,
  desired_a5 char(1) NOT NULL,
  desired_a6 char(1) NOT NULL,
  desired_a7 char(1) NOT NULL,
  desired_a8 char(1) NOT NULL,
  desired_a9 char(1) NOT NULL,
  desired_a10 char(1) NOT NULL,
  desired_a11 char(1) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE user_responses
(
  id int NOT NULL,
  user_id int NOT NULL,
  trial_id int NOT NULL,
  a1 char(1) NOT NULL,
  a2 char(1) NOT NULL,
  a3 char(1) NOT NULL,
  a4 char(1) NOT NULL,
  a5 char(1) NOT NULL,
  a6 char(1) NOT NULL,
  a7 char(1) NOT NULL,
  a8 char(1) NOT NULL,
  a9 char(1) NOT NULL,
  a10 char(1) NOT NULL,
  a11 char(1) NOT NULL,
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