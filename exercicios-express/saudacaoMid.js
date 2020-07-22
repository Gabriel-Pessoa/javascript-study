function saudacao(nome) {
    // retorna um middleware
    // essa função irá executar e retorna sempre houver uma requisição
    return function(req, res, next) {
        console.log(`Seja bem-vindo! ${nome}`); // será executado sempre que chegar uma requisição
        next();
    }
}

module.exports = saudacao;