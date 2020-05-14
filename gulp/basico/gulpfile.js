const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}


function copiar(callback) {
    gulp.src ('pastaA/**/*.txt') // qualquer arquivo dentro da pasta A e subpastas com extensão .txt
    // src: serve para selecionar quais arquivos vai usar como entrada para o workflow
    // para passar mais de 1 arquivo é preciso colocar dentro de um array
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    //aplicar transformações nos arquivos que definimos para workflow, posso encadear várias transformações até chegar ao resultado que espero 
    .pipe(gulp.dest('pastaB')) // gulp.dest: pasta destino que será criada automaticamente

    return callback()
}

const fim = cb => {
    console.log('Fim!')
    return cb()
}

module.exports.default = series( // importar o objeto modules.exports com a task obrigátoria do gulp que é o default
   parallel(antes1, antes2), // espera termina as chamadas em paralelo, para depois continua as chamadas em series
    copiar,
    fim
) 