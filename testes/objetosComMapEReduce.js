const familia = [
    {nome:'Gabriel Júlio', idade:24, cidade:'Recife', salario:5500},
    {nome:'Manoel Paulio', idade:55, cidade:'Olinda', salario:2100},
    {nome:'Ytallo Gustavo', idade:29, cidade:'Abreu e Lima', salario:3500},
    {nome:'Christiane Ledo', idade:48, cidade:'Recife', salario:2059},
    {nome:'Maria Júlia', idade:75, cidade:'Caruaru', salario:1259}

]

const filtraCidade = array => array.cidade === 'Recife'

const menorSalario = (acumulador, atual) => acumulador.salario < atual.salario ? acumulador : atual 


let resultado = familia.reduce(menorSalario)

console.log(resultado)