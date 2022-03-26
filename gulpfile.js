const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
//  by using npm gulp-purgecss  --save-dev  we can use just the css rules that we used in our project and delete extra pnes
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    // witch file to be used purgecss
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
}

//  by using this method we can watch our css when its updated add that class
function watchTask() {
  //  files to be watched by watchTask
  watch(['sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)