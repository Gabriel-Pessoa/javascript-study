// objeto pessoa declarado
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
}
// destructuring do objeto pessoa. Pegou as variáveis 'nome' e 'idade' do objeto 'pessoa'
const { nome, idade } = pessoa

console.log(nome,idade);
// Pegou as variáveis 'nome' e atribui a 'n' ; 'idade' e atribui a 'i' do objeto 'pessoa'
const {nome : n , idade:i } = pessoa

console.log(n,i);

/* pegou atributos que não existem no objeto pessoa, logo retorna undefined, exceto
para bemHumorada que por padrão recebeu = true */
const {sobrenome , bemHumorada = true} = pessoa

console.log(sobrenome,bemHumorada)

// acessando objeto de objeto com destructuring
const { endereco: { logradouro, numero, cep} } = pessoa

console.log(logradouro,numero, cep)



