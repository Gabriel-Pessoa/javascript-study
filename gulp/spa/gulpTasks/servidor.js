// Servidor de desenvolvimento que reinicia o servidor após mudança na build
const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')


function servidor() {
    return gulp.src('build') // servindo essa pasta
    .pipe(webserver({ // objeto para configurações
        port: 8080,
        open: true, //abrir o chrome
        livereload: true,
    }))
}


function monitorarArquivos(cb) {
    // se esse diretórios mudarem, chame uma função task
    watch('src/**/*.html', () => gulp.series('appHTML')()) 
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appHTML')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}


module.exports = {
    monitorarArquivos,
    servidor
}