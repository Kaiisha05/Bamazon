DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50) NULL,
    dept_name VARCHAR (50) NULL,
    price DECIMAL (5,2) NULL,
    quantity INT NULL,

    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, dept_name, price, quantity)
VALUES ("8ft tree", "Christmas", 75.00, 1000),
("pumpkin", "Halloween", 20, 1000),
("stuffed turkey","Thanksgiving", 15, 500),
("shamrocks", "St.Patricks", 5, 100),
("candy hearts", "Valentine's", 10, 1000),
("sparklers", "Independence Day", 5, 1000),
("streamers", "NYE", 5, 100),
("wreath", "All-Year", 35, 1000),
("bunny", "Easter", 40, 500),
("lights", "Christmas", 15, 1000);

SELECT * FROM products;
