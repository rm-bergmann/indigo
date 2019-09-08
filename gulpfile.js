var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var cleancss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var htmlInjector = require('bs-html-injector');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {

  browserSync.use(htmlInjector, {});

  gulp.src('./less/style.less')
    .pipe(plumber())
    .pipe(less({
      paths: ['./less/']
    }))
    .pipe(prefix('last 3 version', '> 1%'))
    .pipe(plumber.stop())
    .pipe(cleancss())
    .pipe(gulp.dest('./css'))
    .pipe(reload({stream: true}));
});

gulp.task('serve', ['browser-sync'], function() {

  browserSync.init({
    proxy: 'http://drupal-example.docker.amazee.io',
    open: false,
    port: 4000
  });

  gulp.watch(['./less/**/*.less', '!node_modules/**/*.js'], ['browser-sync']);
  gulp.watch(['**/*.js', '!node_modules/**/*.js']).on('change', reload);
  gulp.watch('*.theme').on('change', reload);
  gulp.watch(['**/*/.twig'], htmlInjector);

});
