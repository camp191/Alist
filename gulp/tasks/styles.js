var gulp = require('gulp');
var postCSS = require('gulp-postcss');
var autoPrefixer = require('autoprefixer');
var varCSS = require('postcss-simple-vars');
var nested = require('postcss-nested');
var importCSS = require('postcss-import');

gulp.task('css', function(){
  return gulp.src('./app/assets/styles/index.css')
        .pipe(postCSS([importCSS, varCSS, autoPrefixer, nested]))
        .on('error', function(errorInfo){
          console.log(errorInfo.toString());
          this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
})
