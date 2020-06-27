-- Traz somente a parte da interseção. Não há relação entre os prefeitos com cidade_id null
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

select * from cidades;
select * from prefeitos;

-- Interseção mais tabela a (esquerda). Traz a interseção prefeitos com cidades setadas, e também traz lado esquerdo: todas as cidades.
select * from cidades c left join prefeitos p on c.id = p.cidade_id;
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;

-- Interseção mais tabela b (direita). Traz a interseção prefeitos com cidades setadas, e também traz lado direito: todos os prefeitos.
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id;


--Full Join tabela a + interseção + tabela b. O comando full join não é suportado pelo mySql, podemos usar o equivalente
select * from cidades c left join prefeitos p on c.id = p.cidade_id;
union
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
