function planoTrabalho (salario, plano) {
    switch (plano) {
        case'a':
            console.log('Plano A, sálario com aumento = ', salario + (salario*0.10))
            break
        case 'b':
            console.log('Plano B, sálario com aumento = ', salario + (salario*0.15))
            break
        case 'c':
            console.log('Plano C, sálario com aumento = ', salario + (salario*0.20))
            break
        default:
            console.log('Plano inválido')        
    }
}

planoTrabalho(1000,'a')
planoTrabalho(1000,'b')
planoTrabalho(1000,'c')
planoTrabalho(1000,'d')