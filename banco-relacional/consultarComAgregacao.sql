--Selecione Coluna (Região); some a populacao de cada região da tabela estados; agrupe por região; ordene por total decrescente
select 
    regiao as 'Região',
    sum(populacao) as Total
from estados
group by regiao
order by Total desc

select sum(populacao) as Total from estados