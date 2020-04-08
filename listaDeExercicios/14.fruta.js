function fruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
        default:
            console.log('Fruta inválida')
        
    }
}

fruta('maçã')
fruta('kiwi')
fruta('melancia')
fruta('banana')