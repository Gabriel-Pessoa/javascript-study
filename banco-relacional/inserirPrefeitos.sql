SELECT * FROM cidades

INSERT INTO 
    prefeitos (nome, cidade_id)
VALUES 
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null);


select * from prefeitos;


INSERT 
    prefeitos (nome, cidade_id)
VALUES 
    ('Rafael Greca', null); -- Não lança erro, é permitido ter mais de uma tupla com null


select * from prefeitos;


--Erro lançado, id duplicado:

/*INSERT INTO prefeitos 
    (nome, cidade_id)
VALUES 
    ('Rodrigo Pinheiro', 3)  
*/
