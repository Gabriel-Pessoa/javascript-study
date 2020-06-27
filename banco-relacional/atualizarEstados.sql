--CUIDADO!!! Sem a palavra reservada where você irá setar Maranhão para todas as linhas
update estados
set nome = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = 'MA'

select `nome` from estados where sigla = 'MA' -- comando válido

select estados.`nome` from estados where sigla = 'MA' -- comando válido

select est.`nome` from estados est where sigla = 'MA' -- comando válido

select est.nome from estados est where sigla = 'MA' -- comando válido

--Mais updates

update estados
set nome = 'Paraná', populacao = 11.32
where sigla = 'PR'

select nome, populacao from estados where sigla = 'PR'
