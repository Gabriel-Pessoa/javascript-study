-- Traz todos as entidades
SELECT * FROM estados

select nome, sigla from estados

select sigla, nome from estados

-- Trazer sigla e nome(Nome do Estado) da tabela estados
select sigla, nome as 'Nome do Estado' from estados

-- Trazer sigla e nome(Nome do Estado) da tabela estados onde região == 'Sul'
select Sigla, nome as 'Nome do Estado' from estados
where regiao = 'Sul'

-- Trazer sigla e nome(Nome do Estado) da tabela estados onde região == 'sul'
select sigla, nome as 'Nome do Estado' from estados
where regiao = 'sul'

--Trazer nome, regiao da tabela estados onde populacao >= 10 e ordena por padrão crescente
select nome, regiao from estados 
where populacao >= 10

--Trazer nome, regiao da tabela estados onde populacao >= 10 e ordenar populacao descrecente
select nome, regiao from estados 
where populacao >= 10
order by populacao desc

--Trazer nome, regiao da tabela estados onde populacao >= 10 e ordenar populacao descrecente
select nome, regiao, populacao from estados 
where populacao >= 10
order by populacao desc