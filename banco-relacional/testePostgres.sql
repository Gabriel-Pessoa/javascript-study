-- Criação DB
CREATE DATABASE storedb;

--Usar DB específica
USE storedb;

-- Criações de tabelas
CREATE TABLE customers
(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    address VARCHAR(50) NOT NULL,
    city VARCHAR(30) NOT NULL,
    state CHAR(2) NOT NULL,
    zipcode VARCHAR(30)
);

CREATE TABLE accounts 
(
    account_id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    customer_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);

--Inserções
INSERT INTO customers (first_name, last_name, address, city, state, zipcode)
VALUES 
(  
    'George',
    'Washington',
    '3200 Mt Vernon Hwy',
    'Mount Vernon',
    'VA',
    '22121'
),
(
    'John',
    'Adams',
    '1250 Hancock St',
    'Quincy',
    'MA',
    '02169'
),
(
    'Thomas',
    'Jefferson',
    '931 Thomas Jefferson Pkwy',
    'Charlottesville',
    'VA',
    '22902'
),
(
    'James',
    'Madison',
    '11350 Constitution Hwy',
    'Orange',
    'VA',
    '22960'
),
(
    'James',
    'Monroe',
    '2050 James Monroe Pkwy',
    'Charlottesville',
    'VA',
    '22902'
);

INSERT INTO accounts (email, customer_id) 
VALUES 
    ('barackobama@usa.gov', 1),
    ('jorgewbush@usa.gov', 1),
    ('billclinton@usa.gov', 3),
    ('stevejobs@usa.gov', 4),
    ('billgates@usa.gov', 2),
    ('taruko@usa.gov', 4),
    ('jorgemaison@usa.gov', 5),
    ('agathachristie@usa.gov', 2),
    ('cslewis@usa.gov', 5),
    ('tolkien@usa.gov', 1),
    ('timotykeller@usa.gov', 3),
    ('joebiden@usa.gov', 4)
;

-- Selects
SELECT * FROM accounts WHERE customer_id = 1 AND email = 'barackobama@usa.gov'; -- solução simples

/* Select abaixo traz todos os emails de um cliente específico. Podemos fazer isso unindo as tabelas "customers" e "accounts" pela chave "customer_id" 
   Aqui, estamos unindo as duas tabelas usando a palavra-chave join e especificando qual chave usar ao unir as tabelas na linha 
   "on c.customer_id = a.customer_id" após a instrução de junção.
*/
SELECT account_id, email, a.customer_id 
FROM customers c
INNER JOIN accounts a ON c.customer_id = a.customer_id
WHERE a.customer_id = 1 AND email = 'barackobama@usa.gov';

--Inner Join:

--1)
SELECT 
    c.first_name,
    a.email
FROM accounts a 
INNER JOIN customers c on a.customer_id = c.customer_id;

--2) ordena por nome
SELECT first_name, email
FROM customers c
INNER JOIN accounts a ON c.customer_id = a.customer_id
ORDER BY first_name;


--Left Join:

--1)
SELECT first_name, email
FROM customers c
LEFT JOIN accounts a ON c.customer_id = a.customer_id;

--2) ordena por nome
SELECT first_name, email
FROM customers c
LEFT JOIN accounts a ON c.customer_id = a.customer_id
ORDER BY first_name;


--Right Join:

--1)
SELECT first_name, email
FROM customers c
RIGHT JOIN accounts a ON c.customer_id = a.customer_id;

--2) ordena por nome
SELECT first_name, email
FROM customers c
RIGHT JOIN accounts a ON c.customer_id = a.customer_id
ORDER BY first_name;


--Full Join:

--1)
SELECT first_name, email
FROM customers c
FULL JOIN accounts a ON c.customer_id = a.customer_id;

--2) ordena por nome
SELECT first_name, email
FROM customers c
FULL JOIN accounts a ON c.customer_id = a.customer_id
ORDER BY first_name;