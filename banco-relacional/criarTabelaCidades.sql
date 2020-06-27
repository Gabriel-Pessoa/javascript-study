--Crie tabela se não existir. Ao tentar executar o comando pela segunda vez ele não lança um erro, porém não cria a tabela duplicada
CREATE TABLE IF NOT EXISTS cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    area DECIMAL(10, 2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);

--Relação 1 para n (um pra muitos). Um estado tem várias cidades, chave primária id da tabela estados referenciada na coluna estados_id

--FOREIGN KEY (estado_id) REFERENCES estados (id). Chave estrangeira é a coluna estado_id, que referencia a tabela estados, coluna id

-- DROP
-- Criei tabela teste para simular o DROP 

-- CREATE TABLE IF NOT EXISTS teste (
--     id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
-- );

--Comando DROP:

--DROP TABLE IF EXISTS teste;