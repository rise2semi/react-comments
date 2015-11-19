var gulp = require('gulp');

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
 * Default gulp task
 */
gulp.task('default', function () {
   console.log('No task specified');
});
