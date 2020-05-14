const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS() {
    // filtrar arquivos dentro de src e arquvios com .txt
    return gulp.src('src/**/*.js')
        .pipe(babel({ // dentro do babel passei o objeto de configuração
            comments: false, // não quero que os arquivos de comentários sejam transferidos para o arquivo final
            presets: ['env'] // vai pegar o js na versão mais nova e converte para mais antiga, poderia denir uma versão específica do js ES15, por exemplo
        })) 
        .pipe(uglify()) // vai minificar todo o código
        .on('error', err => console.log(err))// captura algo, no caso um erro
        // parâmetro é o arquivo gerado no final
        .pipe(concat('codigo.min.js')) // vai pegar todos os arquivos compilados usando babel que já foi formatado em uma linha só sem espaços. Esse resultado será concatenado aqui.
        .pipe(gulp.dest('build/js')) // pasta de destino
    
    // return cb() outra opção é retorna o resultado do workflow
}

function fim(cb) {
    console.log('Fim!') // eu não posso simplesmente retornar o console.log
    return cb()
}
// exportando
module.exports.default = series(transformacaoJS, fim) // series faz um, depois o outro
//module.exports.default = parallel(transformacaoJS, fim) // inicia todos ao mesmo tempo