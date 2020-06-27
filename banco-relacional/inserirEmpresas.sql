-- Alterando regra da coluna cnpj
ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

--Inserindo dados na tabela
INSERT INTO empresas 
    (nome, cnpj)
VALUES 
    ('Bradesco', 93777019000120),
    ('Vale', 87865592000192),
    ('Cielo', 98024409000142);

/* OBS:
 Conseguimos incluir dados na coluna tipo VARCHAR sem o uso das aspas
*/

-- Descrevendo os tipos da tabela
DESC empresas;

-- Visualizando tabelas
select * from empresas;
select * from cidades;

-- Inserindo na tabela pivô n cidades para n empresas
INSERT INTO empresas_unidades 
    (empresa_id, cidade_id, sede)
VALUES 
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);

