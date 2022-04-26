CREATE TABLE _Role (
  id int PRIMARY KEY,
  name varchar(20) NOT NULL
);

CREATE TABLE _User (
  id int PRIMARY KEY,
  fullname varchar(60),
  email varchar(150),
  phone_number varchar(20),
  address varchar(200),
  password varchar(32),
  role_id int,
  created_at datetime,
  updated_at datetime,
  datetime int
);

CREATE TABLE _Category (
  id int PRIMARY KEY,
  name varchar(100) NOT NULL
);

CREATE TABLE _Item (
  id int PRIMARY KEY,
  Category_id int,
  title varchar(350),
  price int,
  discount int,
  thumbnail varchar(500),
  description longtext,
  created_at datetime,
  updated_at datetime,
  datetime int
);

CREATE TABLE _Gallery (
  id int PRIMARY KEY,
  product_id int,
  thumbnail varchar(500) NOT NULL
);

CREATE TABLE _FeedBack (
  id int PRIMARY KEY,
  firstname varchar(40),
  lastname varchar(40),
  email varchar(150),
  phone_number varchar(20),
  subject_name varchar(200),
  note varchar(500)
);

CREATE TABLE _Order (
  id int PRIMARY KEY,
  user_id int,
  fullname varchar(60),
  email varchar(150),
  phone_number varchar(20),
  address varchar(200),
  note varchar(255),
  order_date datetime,
  status int,
  total_money int
);

CREATE TABLE _Order_Details (
  id int PRIMARY KEY,
  order_id int,
  product_id int,
  price int,
  num int,
  total_money int
);

ALTER TABLE _User ADD FOREIGN KEY (role_id) REFERENCES _Role (id);

ALTER TABLE _Item ADD FOREIGN KEY (Category_id) REFERENCES _Category (id);

ALTER TABLE _Order_Details ADD FOREIGN KEY (product_id) REFERENCES _Item (id);

ALTER TABLE _Gallery ADD FOREIGN KEY (product_id) REFERENCES _Item (id);

ALTER TABLE _Order_Details ADD FOREIGN KEY (order_id) REFERENCES _Order (id);

ALTER TABLE _Order ADD FOREIGN KEY (user_id) REFERENCES _User (id);