/*selecione todas as colunas da tabela estado coluna estado (e) e coluna cidades(c), onde e.id(tabela estado-coluna id) seja igual 
c.estado_id(tabela cidades-coluna estado_id)*/
select * from estados e, cidades c
where e.id = c.estado_id;

/* selecione a coluna nome da tabela cidade, a coluna nome da tabela estado e coluna região(não se repete). Faça uma junção interna da tabela 
(dados relacionados) estados e cidades onde as colunas e.id = c.estado_id */
select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região 
from estados e 
inner join cidades c on e.id = c.estado_id

select * from cidades