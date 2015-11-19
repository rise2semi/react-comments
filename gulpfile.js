var gulp = require('gulp');
var connect = require('gulp-connect');

/**
 * Specify config for tasks
 */
var config = {
    index: 'src/index.html',
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
gulp.task('server', ['copy'], function () {

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
 * Default gulp task
 */
gulp.task('default', ['server']);
