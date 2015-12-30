var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");
var ts = require('gulp-typescript');
var es6transpiler = require('gulp-es6-transpiler');
var jsx = require('gulp-jsx');
var concat = require('gulp-concat');
var minify = require('gulp-minify');


/**
 * Specify config for tasks
*/
var config = {
    distCss: 'dist/css',
    distJs: 'dist/js'
};
/**
 * Style task
 */
 gulp.task('default', function() {
    gulp.src('src/styles/**/*.sass')
        .pipe(sass())
        .pipe(concatCss('styles.css'))
        .pipe(minifyCss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest( config.distCss ));
});
/**
 * JaveScript task
 */
 gulp.task('default', function () {
 	return gulp.src('src/js/**/*.ts')
 		.pipe(ts({
 			noImplicitAny: true
 		}))
    .pipe(es6transpiler())
    .pipe(jsx({
      factory: 'React.createClass'
    }))
    .pipe(concat('scripts.js'))
    .pipe(minify())
 		.pipe(gulp.dest(config.distJs));
 });
