
function ordenaNumerosCrescente(...argumentos) {
    argumentos.sort((a, b) => a - b)
    console.log(argumentos)
}

function ordenaNumerosDecrescente(...argumentos) {
    argumentos.sort((a,b) => a < b ? 1 : -1)
    console.log(argumentos)
}


ordenaNumerosCrescente(5,3,2,4,5,8,22,32,18,34,12,54,10)
ordenaNumerosDecrescente(5,3,2,4,5,8,22,32,18,34,12,54,10)