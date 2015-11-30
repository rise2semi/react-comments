var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat-css');
var sass = require('gulp-sass');

/**
 * Specify config for tasks
 */
var config = {
    index: 'src/index.html',
    src: 'src',
    dist: './dist'
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
gulp.task('style', function () {
    gulp.src(config.src + '/styles/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.dist + '/css/'));
});

/**
 * Default gulp task
 */
gulp.task('default', ['server']);
