// let fatorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)} // Recurssão 

// console.log(fatorial(10))
// console.log(fatorial(3))

// OU

function fatorial (numero) {
    let fatorando = 1
    if( numero < 2) {
        fatorando = 1
    }
    else { 
        for (let i = 2; i <= numero; i++) {
            fatorando *= i
        }
    }    
    console.log(fatorando)
}

fatorial(1)
fatorial(2)
fatorial(3)
fatorial(10)
