var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat-css');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

/**
 * Specify config for tasks
 */
var config = {
    index: 'src/index.html',
    src: 'src',
    dist: './dist',
    distCss: './dist/css'
};

/**
 * Copy index file
 */
gulp.task('copy', function () {
    gulp.src( config.index )
        .pipe( gulp.dest( config.dist ) );
});

/**
 * Start local server for development
 */
gulp.task('server', ['style', 'copy'], function () {

    /**
     * Listening port can be specified manually via command `PORT=7777 gulp`
     * @type {number}
     */
    var serverPort = process.env.PORT || 9000;

    connect.server({
        root: config.dist,
        port: serverPort
    });
});

/**
 * Style task
 */

 gulp.task('style', function() {
    gulp.src('src/styles/**/*.sass')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(minifyCss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest( config.distCss ));
});

/**
 * Default gulp task
 */
gulp.task('default', ['server']);
