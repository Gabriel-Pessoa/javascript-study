// Object.preventExtensions
//Não consigo adicionar novos atributos ao objeti
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag:'promoção'
})

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag // Object.preventExtensions permite excluir atríbutos


console.log(produto);

// Object.seal
const pessoa = { nome:'Gabriel', idade: 24}
Object.seal(pessoa) // Objeto selado, quer dizer que eu não consigo adicionar, nem apagar atributos, porém consigo alterar os valores dos atríbutos 
console.log('Selado', Object.isSealed(pessoa)); // Object.isSealed(pessoa) retorna true ou false para saber se objeto selado ou não

pessoa.sobrenome = 'Pessoa' // Não consigo adicionar novos atríbutos
delete pessoa.nome // Não consegue deletar, pois está selado
pessoa.idade = 29
console.log(pessoa);

// Object.freeze = selado + valores const


