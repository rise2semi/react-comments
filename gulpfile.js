var gulp = require('gulp');
var concat = require('gulp-concat-css');
var sass = require('gulp-sass');

/**
 * Default gulp task
 */
gulp.task('default', function () {
   console.log('No task specified');
});
/**
 * Style task
 */
 gulp.task('default', function () {
   gulp.src('src/styles/**/*.sass')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('dist/css/'));
 });
