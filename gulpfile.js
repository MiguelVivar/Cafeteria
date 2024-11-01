const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done) {
    // Compilar SASS
    // Pasos: 1 - Identificar archivo, 2 - Compilarla, 3 - Guardar el .css
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('build/css'))
    done();
};
function dev() {
    watch('src/scss/app.scss', css);
}
function tareaDefault() {
    console.log("Soy la teara por default");
}

exports.css = css;
exports.dev = dev;
exports.default = series(css, dev);

// Series - Se incia un tarea, hasta que finaliza y se inicia la siguiente
// Parallel - Todas inician al mismo tiempo
