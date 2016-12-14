var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var es6transpiler = require('gulp-es6-transpiler');
var jsx = require('gulp-jsx');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var connect = require('gulp-connect');
var watch =  require('gulp-watch');

/**
 * Specify config for tasks
 */
var config = {
    index: 'src/index.html',
    src: 'src',
    dist: './dist',
    distCss: './dist/css',
    distJs: './dist/js',
    srcCss: 'src/styles/**/*.sass',
    srcJs: 'src/js/**/*.ts'
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
gulp.task('server', ['style', 'scripts', 'copy'], function () {

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
 * JaveScript task
 */
gulp.task('scripts', function () {
 	return gulp.src(config.srcJs)
 		.pipe(ts({
 			noImplicitAny: true
 		}))
    .pipe(es6transpiler())
    .pipe(jsx({
      factory: 'React.createClass'
    }))
    .pipe(concat('scripts.js'))
    .pipe(minify({ ext: { min: '.min.js' } }))
 		.pipe(gulp.dest(config.distJs));
});

/**
 * Style task
 */
 gulp.task('style', function() {
    gulp.src(config.srcCss)
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(minifyCss())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest( config.distCss ));
});

/**
 * Watch task
 */
gulp.task('watch', function () {
    watch.(config.srcCss, ['style']);
    watch.(config.srcJs, ['scripts']);
});

/**
 * Default gulp task
 */
gulp.task('default', ['watch','server']);
