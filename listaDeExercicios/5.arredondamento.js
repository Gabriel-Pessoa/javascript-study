function arredondamento (x) {
    const valor = x.toFixed(2) // limitei o valor de x apenas duas casas após a vírgula
    const array = valor.split(".") 
    
    console.log(`R$${array[0]},${array[1]}`)
}

arredondamento(0.1 + 0.2)