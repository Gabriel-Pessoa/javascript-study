//Ferramenta poderosa, pouca utilizada
function tag(partes, ...valores) {
    console.log(partes) // representa o que não foi interpolado
    console.log(valores) // representa um array com os valores interpolados
    // Posso fazer uma trabalho aqui dentro e retornar outra string trabalhada
    return 'Outra String'
}
const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`) // 