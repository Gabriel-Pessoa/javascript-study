function soBoaNoticia (nota) {
    if(nota >= 7){  // condição usando operador relacional, caso verdadeira, irá realizar bloco de 
                    //código condicional
        console.log('Aprovado com sucesso malandro '+ nota);
    }
}

soBoaNoticia()
soBoaNoticia(6.1)
soBoaNoticia(7.1)
soBoaNoticia(8.1)

function seForVerdadeEuFalo (valor) {
    if (valor) { // Converte o 'valor' para boolean, não precisando de operador operacional
        console.log("' "+ valor +" ' "+'é verdadeiro')
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(false)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
seForVerdadeEuFalo(' ')