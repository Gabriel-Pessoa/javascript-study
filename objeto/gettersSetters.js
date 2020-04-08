const sequencia = {
    _valor:1, // o underline na frente não quer dizer que a variável é privada. É somente uma conversão para outros desenvolvedores que você vai acessar internamente
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
        return this._valor = valor
        } 
    }
}

console.log(sequencia.valor,sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor);
sequencia.valor = 900 // Não permite por conta da validação add no código
console.log(sequencia.valor,sequencia.valor);


