-- Criação DB
CREATE DATABASE storedb;

--Usar DB específica
USE storedb;

-- Criações de tabelas
CREATE TABLE customers
(
    customer_id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    city VARCHAR(30) NOT NULL,
    state CHAR(2) NOT NULL,
    zipcode VARCHAR(30),
    PRIMARY KEY (customer_id)
);

CREATE TABLE orders
(
    order_id INT NOT NULL,
    order_date DATE NOT NULL,
    amount NUMERIC(10, 3) NOT NULL,
    customer_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
    PRIMARY KEY (order_id)
);

--Inserções
INSERT INTO customers (customer_id, first_name, last_name, email, address, city, state, zipcode)
VALUES 
(    1,
    'George',
    'Washington',
    'gwashington@usa.gov',
    '3200 Mt Vernon Hwy',
    'Mount Vernon',
    'VA',
    '22121'
),
(
    2,
    'John',
    'Adams',
    'jadams@usa.gov',
    '1250 Hancock St',
    'Quincy',
    'MA',
    '02169'
),
(
    3,
    'Thomas',
    'Jefferson',
    'tjefferson@usa.gov',
    '931 Thomas Jefferson Pkwy',
    'Charlottesville',
    'VA',
    '22902'
),
(
    4,
    'James',
    'Madison',
    'jmadison@usa.gov',
    '11350 Constitution Hwy',
    'Orange',
    'VA',
    '22960'
),
(
    5,
    'James',
    'Monroe',
    'jmonroe@usa.gov',
    '2050 James Monroe Pkwy',
    'Charlottesville',
    'VA',
    '22902'
);


INSERT INTO orders (order_id, order_date, amount, customer_id) 
VALUES 
    (1,'07/04/1776', 234.56, 1),
    (2,'03/14/1760', 78.50, 3),
    (3,'05/23/1784', 124.00, 2),
    (4,'09/03/1790', 65.50, 3),
    (5,'07/21/1795', 25.50, 10),
    (6,'11/27/1787', 14.40, 9)
;


--Joins
select order_date, order_amount
from customers
join orders
   on customers.customer_id = orders.customer_id
where customer_id = 3