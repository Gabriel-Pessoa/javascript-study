CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id INT UNSIGNED, -- SEM NOT NULL
    PRIMARY KEY (id),
    UNIQUE KEY (cidade_id),
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);

/*

Relação um pra um, Unique Key (cidades_id). Um cidade tem um único prefeito

Chave estrangeira da tabela cidades referenciada na coluna cidades_id

*/