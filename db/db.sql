CREATE DATABASE productsdb IF NOT EXISTS;

USE jusay_fishport_db;

CREATE TABLE product(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200),
  description VARCHAR(400),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE stockUnit(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  productId INT,
  unit VARCHAR(200),
  qty INT,
  price DECIMAL,
  FOREIGN KEY (productId) REFERENCES product(id)
);

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200),
  userName VARCHAR(200),
  firstName VARCHAR(200),
  lastName VARCHAR(200),
  number VARCHAR(200),
  email VARCHAR(200),
  password VARCHAR(200),
  gender VARCHAR(200),
  phone VARCHAR(200),
  address VARCHAR(200),
  provice VARCHAR(200),
  street VARCHAR(200),
  city VARCHAR(200),
  country VARCHAR(200),
  postalCode VARCHAR(200),
  userType INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE saleOrder(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  total DECIMAL,
  userId INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES user(id)
);

CREATE TABLE orderDetail(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  productId INT,
  stockUnitId INT,
  saleOrderId INT,
  cash DECIMAL,
  cashChange DECIMAL,
  qty DECIMAL,
  subtotal DECIMAL,
  FOREIGN KEY (productId) REFERENCES product(id),
  FOREIGN KEY (stockUnitId) REFERENCES saleOrder(id),
  FOREIGN KEY (saleOrderId) REFERENCES user(id)
);