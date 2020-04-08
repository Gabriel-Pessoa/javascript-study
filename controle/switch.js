const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // O parâmetro só aceita number, sendo no geral inteiros
        case 10:
        case 9: // Caso 'nota' 10 ou 9 ele executa linha de código abaixo
            console.log('Quadro de honra! ')
            break // Evita que o switch após entrar nesse 'case' saia executando os outros abaixo.
        case 7: case 8: // A mesma coisa, caso 7 ou 8, executa linha de código abaixo
            console.log('Aprovado ');
            break
        case 6: case 5: case 4:
            console.log('Recuperação ');
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado! ');
            break
        default:
            console.log('Nota inválida!! ');           
    }  
   // console.log('Fim'); A linha de código logo após o switch pode ser executada e ser repetida
   // em cada chamada. Isso é efeito do break, que faz com pule toda vez para fora do bloco do switch    
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)