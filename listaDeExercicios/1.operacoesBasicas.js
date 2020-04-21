function operacoes (x = 0,y = 0) {
    return {
        soma: console.log(`1.Soma ${x} + ${y} = ${x+y}`),
        sub: console.log(`2.Subtração ${x} - ${y} = ${x-y}`),
        mult: console.log(`3.Multiplicação ${x} * ${y} = ${x*y}`),
        div: console.log(`4.Divisão ${x} / ${y} = ${x/y}`)      
    }
}

operacoes(20,10)