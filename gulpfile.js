var gulp = require('gulp');

/**
 * Specify config for tasks
 */
var config = {
    index: 'src/index.html',
    dist: './dist'
};

/**
 * Default gulp task
 */
gulp.task('default', function () {
   console.log('No task specified');
});
