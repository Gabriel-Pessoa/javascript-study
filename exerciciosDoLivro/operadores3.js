var month = 5

if (month === 1) { // se month (que é um number) === 1 (que tbm é um number) 
    console.log('January')
}
else if (month === 2) { // senão se condição 2
    console.log('February');
    
}
else if (month === 3) { // senão se condição 3
    console.log('March');
}
else { // senão encotrar nenhuma das condições acima
    console.log('Month is not January, February, March')
}

// console.log(typeof month);

var mes = 4

switch (mes) {
    case 1:
        console.log('Janeiro');
        break
    case 2:
        console.log('Fevereiro');
        break
    case 3:
        console.log('Março');
    break
    default:
        console.log('Esse mês não é Janeiro, Fevereiro ou Março'); 
}



