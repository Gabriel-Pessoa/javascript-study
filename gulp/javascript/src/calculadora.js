/*
 * Essa é uma calculadora bem legal!!!
 */
// Definindo objeto calculadora
const Calculadora = {
    _resultado: 0, // definimos a propriedade resultado como privada (usando uma sintaxa especial) 
    // função que retorna o resultado
    get resultado() {
        return this._resultado
    },
    somar(a, b = 0) {
        const soma = a + b
        this._resultado += soma
        return this
    },
    potencia(a, b) {
        const potencia = a ** b
        this._resultado += potencia
        return this
    },
    zerar() {
        this._resultado = 0
        return this
    },
    log() {
        console.log(this._resultado)
    }
}


