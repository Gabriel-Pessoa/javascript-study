// function comparativoCrescimento(altura1, taxa1, altura2, taxa2) {
//     if ((altura1 < altura2 || altura1 > altura2) && taxa1 != taxa2) {
//         return calculaAlturaETaxa(altura1, taxa1, altura2, taxa2)
//     }
//     else {
//         console.log('Criança com a mesma altura ou taxa')
//     }

//     function calculaAlturaETaxa(altura1, taxa1, altura2, taxa2) {
//         let maiorAltura = 0
//         let menorAltura = 0
//         let taxaDaMaior = 0
//         let taxaDaMenor = 0

//         if (altura1 < altura2) {
//             menorAltura = altura1
//             maiorAltura = altura2
//             taxaDaMenor = taxa1
//             taxaDaMaior = taxa2
//         }
//         if (altura1 > altura2) {
//             maiorAltura = altura1
//             menorAltura = altura2
//             taxaDaMaior = taxa1
//             taxaDaMenor = taxa2
//         }

//         let qtdAnos = 0

//         while (menorAltura <= maiorAltura) {

//             menorAltura += taxaDaMenor
//             maiorAltura += taxaDaMaior
//             qtdAnos++
//             if(qtdAnos >= 100) {
//                 break
//             }
//         }
//         return qtdAnos
//     }
// }

// console.log(comparativoCrescimento(10,2,13,3))

function calculaAlturaBaseadoTaxa(objCrianca1, objCrianca2) {
    if ((objCrianca1.altura < objCrianca2.altura || objCrianca1.altura > objCrianca2.altura) && objCrianca1.taxaCrescimento != objCrianca2.taxaCrescimento) {
        return ordenarECalcular(objCrianca1, objCrianca2)
    }
    else {
        console.log('Erro! Altura ou taxa iguais.')
    }

    function ordenarECalcular(objCrianca1, objCrianca2) {
        let objCriancaMaior = {}
        let objCriancaMenor = {}

        if (objCrianca1.altura < objCrianca2.altura) {
            objCriancaMenor = objCrianca1
            objCriancaMaior = objCrianca2
        }
        if (objCrianca1.altura > objCrianca2.altura) {
            objCriancaMenor = objCrianca2
            objCriancaMaior = objCrianca1
        }
        while (objCriancaMenor.altura <= objCriancaMaior.altura) {
            objCriancaMenor.altura += objCriancaMenor.taxaCrescimento
            objCriancaMaior.altura += objCriancaMaior.taxaCrescimento
            objCriancaMaior.idade++
            objCriancaMenor.idade++

            if ((objCriancaMaior.idade || objCriancaMenor.idade) >= 100) { break }
        }
        if((objCriancaMaior.idade || objCriancaMaior.idade) >= 100) {
            return console.log('Cálculo impossível')
        }
        return console.log([objCriancaMenor, objCriancaMaior])
    }

}
const crianca1 = { nome: 'Bernardo', idade: 10, altura: 129, taxaCrescimento: 3 }
const crianca2 = { nome: 'Bruno', idade: 12, altura: 149, taxaCrescimento: 1 }

calculaAlturaBaseadoTaxa(crianca1, crianca2)