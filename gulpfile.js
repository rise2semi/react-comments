var gulp = require('gulp');
var concat = require('gulp-concat-css');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");

/**
- * Default gulp task
+ * Specify config for tasks
+ */
var config = {
    distCss: 'dist/css'
};
/**
 * Style task
 */
 gulp.task('default', function() {
    gulp.src('src/styles/**/*.sass')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(minifyCss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest( config.distCss ));
});
