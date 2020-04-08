// A const pessoa aponta -> para um endereço de mémoria fixo e não pode ser alterado, só o que está dentro do endereço
const pessoa = {nome:'João'}
pessoa.nome ='Pedro'
console.log(pessoa)

//pessoa aponta para endereço fixo, se eu tentar alterar irá dar um erro
/* pessoa = {nome:'Ana'} */

Object.freeze(pessoa) // congelei objeto pessoa; não posso alterar, adicionar ou deletar atríbutos

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua Abc'
delete pessoa.nome

console.log(pessoa)

// Criando um objeto constante tanto em mémoria como em dados desde da sua declaração
 const pessoaConstante = Object.freeze({nome:'João'})
 pessoaConstante.nome = 'Pedro' // Não consigo alterar 
 console.log(pessoaConstante);
 
