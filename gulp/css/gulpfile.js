const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss') // não preciso referênciar todas os arquivos dentro de sass, somente o index que possui todos os imports.
        // pega todo o sass e converte em css
        .pipe(sass().on('error', sass.logError)) // função 'on' opcional, porém recomendada pois irá logar o erro, isso nos ajuda na resolução.
        .pipe(uglifycss({ "uglyComments": true})) // parâmetro de configuração do uglifycss
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/**/*.html') // ou mais específico 'src/index.html'
        .pipe(gulp.dest('build'))
}

module.exports.default = parallel(transformacaoCSS, copiarHTML)



