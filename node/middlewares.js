// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => { // ctx é um objeto. next é uma função
    ctx.valor1 = 'mid1' // criei um atributo valor1 no objeto ctx
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2' // criei um atributo valor2 no objeto ctx
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3' // criei um atributo valor3 no objeto ctx


const exec = (ctx, ...middlewares) => { // o operador rest(...) cria um array chamado middlewares que recebe um conjuto de funções

    const execPasso = indice => { // função que irá executar as funções guardadas no array middlewares, criada na função acima.
        // verificar logo se array está setado
        if(middlewares && indice < middlewares.length) {// middlewares está setado (true)? && indice é menor que o tamanho do array ?
            middlewares[indice](ctx, () => execPasso(indice + 1)) // middleware[indice=0,1,2](ctx, função recursiva ()=> execPasso(indice + 1) //Para poder visualizar os
        }                                                         // próximos índices do middleware. Quem dispara essa função é a função next)
    }
    execPasso(0) // Invoco a função a partir do indice 0, sendo incrementado pela função next()
}

const ctx = {}

exec(ctx, passo1, passo2, passo3)

console.log(ctx)

