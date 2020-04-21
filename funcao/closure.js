const x = 'Global'

function fora () {
    const x = 'Local' //declarei dentro da função a mesma const x e defini um novo valor 
    return function dentro () {
        return x // Como um closure é o fechamento (escopo), e a const x foi declara dentro do escopo da função
        // fora() ele memoriza e fixa esse valor permanentemente
    }
}

const minhaFuncao = fora() // atribui a uma constante a função fora()
console.log(minhaFuncao())

