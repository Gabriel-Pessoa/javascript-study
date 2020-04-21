function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) =>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('') // Vai juntar todo o array
}

const preco = 29.9
const precoParcela = 11

console.log(real `1x ${preco} ou 3x de ${precoParcela}`)