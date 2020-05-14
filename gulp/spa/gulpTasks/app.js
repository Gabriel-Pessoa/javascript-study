// Tasks relacionada ao código da aplicação
const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true })) // remove todos os espaços em branco
        .pipe(gulp.dest('build')) // vai acompanhar a construção dos diretórios originais
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['env'] })) // ['ENV']: error
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*') // pega tudo dentro da pasta e subpasta
        .pipe(gulp.dest('build/assets/imgs'))
}


// registrando um task para ser chamado caso tenha alguma alteração no servidor
gulp.task('appHTML', appHTML) 
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)


module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}
