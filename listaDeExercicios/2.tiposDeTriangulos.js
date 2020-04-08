function tiposTriangulos (lado1 = 0,lado2 = 0,lado3 = 0) {
    if (lado1 === lado2 && lado1 === lado3) {
        console.log('Triângulo Equilátero')
    }
    else if(lado1 === lado2 || lado1 === lado3) {
        console.log('Triângulo Isósceles')   
    }
    else if (lado1 !== lado2 && lado1 !== lado3) {
        console.log('Triângulo Escaleno')
    }
    else {
        console.log('Dados inválidos')
    }
}

tiposTriangulos(3,3,3)
tiposTriangulos(3,3,4)
tiposTriangulos(3,4,5)
