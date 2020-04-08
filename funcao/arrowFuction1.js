let dobro = function (a) {
    return 2 * a
}

dobro = a => {
    return 2 * a
}

dobro = a => 2*a // Return implícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá! '
}

ola = () => 'Olá! '// Possui um parâmetro vazio ou
ola = _ => 'Olá! ' // Assim com _, Possui um parâmetro vazio tbm

console.log(ola())

















