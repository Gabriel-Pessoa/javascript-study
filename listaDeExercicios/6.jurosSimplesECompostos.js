function juroSimples (capitalInicial,taxa,tempoAplicacao){
    const juros = capitalInicial*taxa*tempoAplicacao
    const montante = capitalInicial + juros
    
    console.log(`O montante dessa aplicação a juros simples é = ${montante.toFixed(3)}`)
}

function jurosComposto (capitalInicial,taxa,tempoAplicacao){
    const montante = capitalInicial*((1+taxa)**tempoAplicacao)

    console.log(`O montante dessa aplicação a juros composto é = ${montante.toFixed(3)}`)    
}

juroSimples(5000,0.05,12)
jurosComposto(5000,0.05,12)