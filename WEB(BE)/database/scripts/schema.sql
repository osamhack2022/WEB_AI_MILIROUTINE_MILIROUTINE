-- CREATE DATABASE miliroutine_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE miliroutine_db;

CREATE TABLE user (
    no INT UNSIGNED AUTO_INCREMENT,
    id VARCHAR(30),
    pw VARCHAR(100) NOT NULL,
    salt VARCHAR(64) NOT NULL,
    email VARCHAR(60) NOT NULL,
    nickname VARCHAR(10) NOT NULL,
    profile_img VARCHAR(300),
    background_img VARCHAR(300),
    point INT UNSIGNED DEFAULT 0,
    exp INT UNSIGNED DEFAULT 0,
    PRIMARY KEY (no)
);

CREATE TABLE user_category (
    id INT UNSIGNED AUTO_INCREMENT,
    user_no INT UNSIGNED,
    category VARCHAR(20) NOT NULL, -- study, workout, morningroutine, economy, selfcare, dream, hobby, emotion, health
    PRIMARY KEY (id),
    FOREIGN KEY (user_no) REFERENCES user(no)
);

CREATE TABLE level_exp (
    level TINYINT UNSIGNED,
    exp INT UNSIGNED NOT NULL,
    PRIMARY KEY (level)
);

CREATE TABLE routine (
    id INT UNSIGNED AUTO_INCREMENT,
    host INT UNSIGNED,
    name VARCHAR(40) NOT NULL,
    category VARCHAR(20) NOT NULL,
    thumbnail_img VARCHAR(300),
    auth_cycle  TINYINT UNSIGNED NOT NULL,
    auth_description_list JSON NOT NULL, -- ["매일 저녁 감사한 일을 생각해보세요", "해당 내용을 [인증하기] 탭에 기록하여 업로드하면 참여 완료!\n(업로드한 글은 다른 사람에게 공개되지 않습니다)"]]a
    start_date DATE NOT NULL,
    duration TINYINT UNSIGNED NOT NULL,
    point_info_list JSON, -- [{'type': "every_week", 'point': 20}, {'type': "rate", 'number': 0.5, 'point': 100}, {'type': "rate", 'number': 0.9, 'point': 100}]
    PRIMARY KEY (id),
    FOREIGN KEY (host) REFERENCES user(no)
);

CREATE TABLE user_routine (
    id INT UNSIGNED AUTO_INCREMENT,
    user_no INT UNSIGNED,
    routine_id INT UNSIGNED,
    type VARCHAR(10) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_no) REFERENCES user(no),
    FOREIGN KEY (routine_id) REFERENCES routine(id)
);


CREATE TABLE auth (
    id INT UNSIGNED AUTO_INCREMENT,
    user_no INT UNSIGNED,
    routine_id INT UNSIGNED,
    week TINYINT UNSIGNED NOT NULL,
    day TINYINT UNSIGNED NOT NULL,
    date DATE NOT NULL,
    img VARCHAR(300),
    text TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_no) REFERENCES user(no),
    FOREIGN KEY (routine_id) REFERENCES routine(id)
);

CREATE TABLE goods (
    id INT UNSIGNED AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    description TEXT NOT NULL,
    thumbnail_img VARCHAR(300),
    price INT UNSIGNED NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE user_goods (
    id INT UNSIGNED AUTO_INCREMENT,
    user_no INT UNSIGNED,
    goods_id INT UNSIGNED,
    datetime DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_no) REFERENCES user(no),
    FOREIGN KEY (goods_id) REFERENCES goods(id)
);

INSERT INTO level_exp
	VALUES(1, 100), (2, 100+500), (3, 600+1000), (4, 1600+2000), (5, 3600+2000), (6, 5600+2000), (7, 7600+5000), (8, 12600+5000), (9, 17600+5000);