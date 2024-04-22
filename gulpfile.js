const {src,dest,watch, parallel} = require("gulp"); //extrae funcion de gulp
const sass = require("gulp-sass")(require("sass")); //extreae funcion de sass
const plumber = require("gulp-plumber");
//pipe es una accion que se repite una de tras de otras
function css(cb) {
    src("src/scss/*/**.scss")//Identifica archivo dee sass
        .pipe(plumber())
        .pipe(sass())//compila la funcion de sass
        .pipe(dest("build/css")) //Almacena en el disco duro

    cb(); //Callback que avisa a gulp cuando llegamos al final
}

function dev(cb){
    watch("src/scss/*/**.scss", css)
    
    cb();
}


exports.css = css
exports.dev = parallel(css,dev)