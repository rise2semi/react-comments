var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var watch =  require('gulp-watch');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var livereload = require('gulp-livereload');
var babelify = require('babelify');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');




/**
 * Specify config for tasks
 */
 var config = {
  index: 'src/*.html',
  src: 'src',
  dist: './dist',
  distCss: './dist/css',
  distJs: './dist/js',
  srcCss: 'src/styles/**/*.sass',
  srcJs: 'src/js/**/*.jsx, src/js/**/*.js',
  entryPoint: 'src/js/main.jsx',
  minifiedOut: 'build.min.js',
  extensions: ['.js', '.json', '.es6', '.jsx']
};

/**
 * Start local server for development
 */
 gulp.task('server', ['watch'], function () {

  var serverPort = process.env.PORT || 9000;

  connect.server({
    root: config.dist,
    port: serverPort
  });
});


 /**
 * Copy index file
 */
 gulp.task('copy', function () {
  gulp.src( config.index )
  .pipe( gulp.dest( config.dist ) );
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
 * JaveScript task
 */

var bundler = watchify(browserify({
  debug: false,
  extensions: config.extensions
}))
  .transform(babelify.configure({
    extensions: config.extensions,
    presets: ['react', 'es2015']
  }))
  .require('./src/js/main.jsx', {entry: true});

livereload.listen();

function bundle() {
  return bundler
    .bundle()
    .on('error', function (err) {
      console.error('' + err);
    })
    .pipe(source('build.js'))
    .pipe(gulp.dest(config.distJs))
    .pipe(livereload());
}

gulp.task('bundle', bundle);
bundler.on('update', bundle);
bundler.on('log', console.log);


/**
 * Watch task
 */
 gulp.task('watch', ['style', 'copy', 'bundle'], function () {
  watch(config.index, function () {
    gulp.start('copy');
  });
  watch(config.srcCss, function () {
    gulp.start('style');
  });
  watch(config.srcJs, function () {
    gulp.start('scripts');
  });
});


/**
 * Default gulp task
 */
 gulp.task('default', ['watch', 'server']);
