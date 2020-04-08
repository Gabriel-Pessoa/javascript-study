function calculadoraBasica (numero1,operacao,numero2) {
    switch(operacao) {
        case '+':
            console.log('Soma = ',numero1+numero2)
            break
        case '-':
            console.log('Subtração = ', numero1-numero2)
            break
        case '*':
            console.log('Multiplicação = ', numero1*numero2)
            break
        case '/':
            console.log('Divisão = ',numero1/numero2)
            break
        default:
            console.log('Operação inválida')         
    }
}

calculadoraBasica(2,'+',3)
calculadoraBasica(2,'-',3)
calculadoraBasica(2,'*',3)
calculadoraBasica(2,'/',3)
calculadoraBasica(2,',',3)