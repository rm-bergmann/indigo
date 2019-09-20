const gulp = require('gulp');
const less = require('gulp-less');
const watch = require('gulp-watch');
const prefix = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const htmlInjector = require('bs-html-injector');
const reload = browserSync.reload;
const buildDir = './build';

// Set Project Domain to proxy:
const proxyDomain = '127.0.0.1';

function buildStyles() {
  return gulp
    .src('./less/style.less') // only compile the entry file
    .pipe(plumber())
    .pipe(
      less({
        paths: ['./less/*/*']
      })
    )
    .pipe(prefix('last 4 versions', '> 1%', 'ie 11', 'ios 7'))
    .pipe(plumber.stop())
    .pipe(
      cleanCSS({
        advanced: false,
        agressiveMerging: false,
        compatibility: 'ie11',
        processImport: false
      })
    )
    .pipe(gulp.dest(buildDir))
    .pipe(reload({ stream: true }));
}

function buildScripts() {
  return gulp
    .src('./js/script.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(browserify({ transform: ['babelify'] }))
    .pipe(gulp.dest(buildDir))
    .pipe(reload({ stream: true }));
}

function syncBrowsers() {
  browserSync.use(htmlInjector, {});

  return browserSync.init({
    proxy: proxyDomain,
    open: false,
    port: 4000
  });
}

function watchFiles() {
  watch(['./less/**/*.less'], buildStyles, htmlInjector);
  watch(['./js/*.js'], buildScripts, htmlInjector);
  watch(['./js/*.js']).on('change', reload);
  watch(['./templates/*/*.twig', './*.theme'], htmlInjector);
  watch('./*.theme').on('change', reload);
}

exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;
exports.syncBrowsers = syncBrowsers;
exports.watchFiles = watchFiles;
exports.serve = gulp.parallel(buildStyles, buildScripts, syncBrowsers, watchFiles);
