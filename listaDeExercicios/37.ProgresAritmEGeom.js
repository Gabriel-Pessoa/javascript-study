function progressaoAritmetica(numTermo,firstTermo,razao) {
    let termoPA =  firstTermo + (numTermo - 1) * razao
    let somaPA = ((firstTermo + termoPA) * numTermo) / 2


    console.log(`O ${numTermo}º termo da Progressão Aritmética é = ${termoPA}.
     E a soma dos ${numTermo} primeiros termos é = ${somaPA}` )
}

function geometricProgression(termNumber,termFirst,reason) {
    let termGP = termFirst* (reason**(termNumber-1))
    let sumGP = (termFirst* (reason**termNumber-1)) / reason - 1 // consertar fórmula

    return console.log(`Termo da PG = ${termGP}
    Soma dos termos da PG = ${sumGP}`);

}

progressaoAritmetica(16,-10,3)
geometricProgression(10,1,2)