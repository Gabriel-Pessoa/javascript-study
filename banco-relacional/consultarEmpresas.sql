/*
  Selecione as colunas nome da tabela empresa e nome das tabelas cidade(e),
  da tabela empresa(e), empresas_unidades(eu), cidades(c)
  onde empresa coluna id igual a empresa_unidades coluna empresa_id
  e cidade coluna id igual a empresa_unidades coluna estado_id
  e sede == true ou 1
*/
select e.nome, c.nome
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede