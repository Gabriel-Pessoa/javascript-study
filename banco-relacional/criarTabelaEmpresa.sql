CREATE TABLE IF NOT EXISTS empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj INT UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

-- UNIQUE KEY: Único cnpj


-- Informações como cidade_id e empresa_id ficará em outra tabela para relação de muito para muitos (n - n)
--cidade_empresas. Uma empresa pode ter várias unidades em uma cidade:
-- Tabela pivô n cidades para n empresas
CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL,
    PRIMARY KEY (empresa_id, cidade_id)
);

-- sede TINYINT(1) um dígito: 0 false e 1 verdadeiro .
-- PRIMARY KEY é uma composição de duas colunas