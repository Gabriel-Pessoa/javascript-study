const produto = new Object // Uma maneira de criar um objeto é usar a função Objeto com a palavra reservada "new", portanto, uma função que constrói um novo objeto
produto.nome = 'cadeira' // Por ser dinâmico, podemos criar diretamente um atributo
produto['marca do produto'] = 'Generica' // Identifica do produto com um array entre colchetes não é uma boa prática
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome:'Raul',
        idade:56,
        endereco:{
            logradouro:'Rua ABC',
            numero:123
        }
    },
    condutores: [{
        nome:'Junior',
        idade:19
    },{
        nome:'Ana',
        idade:42
    }],
    calculaValorSeguro: function(){
        ///.....
    }
}

console.log(carro)

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro)
console.log(carro.condutores) // undefined
console.log(carro.condutores.length); // Erro, tentar acessar alguma função de algo undefined 




