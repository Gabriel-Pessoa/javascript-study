const saudacao = 'Opa' // Um contexto léxico; 1
  
function exec() 
{
    const saudacao = 'Falaaa' // Outro contexto léxico; 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome:'Gabriel',
    idade: 24,
    peso: 75,
    endereco:{
        logradouro:'Rua Rio Pajeú',
        numero: 34
    }
    
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

