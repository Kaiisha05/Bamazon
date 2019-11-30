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
VALUES ("stuffed turkey", "Thanksgivng", 25, 1000),
("fall decor", "Thanksgiving", 45, 1000),
("placemats","Thanksgiving", 15, 500),
("streamers", "NYE", 15, 100),
("balloons", "NYE", 2, 1000),
("sparklers", "NYE", 5, 1000),
("snowman", "Christmas", 25, 100),
("wreath", "Christmas", 35, 1000),
("8ft tree", "Christmas", 70, 500),
("lights", "Christmas", 15, 1000);

SELECT * FROM products;
