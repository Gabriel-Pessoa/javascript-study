function resultado (nota) {
let notaCorrigida = arredondar(nota)
    
    if (notaCorrigida >= 40) {
        console.log(`Aluno aprovado com nota = ${notaCorrigida}`)
    }
    else {
        console.log(`Aluno reprovado com nota = ${notaCorrigida}`)
    }

    function arredondar (nota) {
        if ((nota % 5) > 2) {
            return nota + (5- (nota % 5) )
        }
        else {
            return nota
        }
    }
}

resultado(50)
resultado(49)
resultado(48)
resultado(47)
resultado(46)    
resultado(45)
resultado(44)
resultado(43)
resultado(42)
resultado(41)
resultado(40)
