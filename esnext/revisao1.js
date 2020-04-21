// Let vs Var palavras reservadas para variáveis. Let tem escopo de bloco ({},for,if, while) ele fica apenas disponível dentro desse bloco ou instrução e tbm tem escopo escopo de função.
// Var é variável global, que não tem escopo de bloco ou instrução, mas tem escopo de função, ficando acessível apenas dentro dela 

{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)
//console.log(b) // Not defined, let tem escopo de bloco, ficando apenas acessível dentro do bloco

// Template String
const produto = 'Ipad'
console.log(`${produto}
 é 
caro!`) // você pode interpolar uma variável dentro da string. Aceita também quebra de linhas

// Destructuring
// Extrair de uma estrutura (array,objeto, string)

const [l, e, ...tras] = 'Cod3r' //Exemplo muito massa de desestruturar uma string, inclusive com o operador rest
console.log(l, e, tras)

const [x, y] = [1, 2] // Atribuição via destructuring
console.log(x, y)

const [c, , d] = [1, 2, 3] // Ignorei o terceiro elemento da direita ou podereria ignorar o teceiro elemento da esquerda
console.log(c, d)

const {idade:i, nome} = {nome:'Ana', idade:39} // Desestruturando objeto, e criando uma variável específica para acessar como a variável i
console.log(i, nome)