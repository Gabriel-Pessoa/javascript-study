const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json') // arquivo de configuração 


function transformacaoTS() {
    return tsProject.src() // tsProject definido acima com os parâmetros para essa função src() (todo o código fonte)
        .pipe(tsProject()) // gulp TypeScript
        .pipe(gulp.dest('build')) // pasta de destino que será criada
}

module.exports.default = series(transformacaoTS)