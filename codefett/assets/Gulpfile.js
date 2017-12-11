var browserify = require('browserify'),
    gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

var entryPoint = './js/main.js',
    imagesPath = './images/**/*',
    sassWatchPath = './sass/**/*.scss',
    jsWatchPath = './js/**/*.js',
    destPath = '../static/';

gulp.task('js', function () {
    return browserify(entryPoint, {debug: true, extensions: ['es6']})
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destPath + '/js/'));
});



gulp.task('images', function() {
    return gulp.src(imagesPath)
        .pipe(gulp.dest(destPath + '/images/'))
});

gulp.task('sass', function () {
  return gulp.src(sassWatchPath)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destPath + '/css/'));
});

gulp.task('watch', function () {
    gulp.watch(jsWatchPath, ['js']);
    gulp.watch(sassWatchPath, ['sass']);
});

gulp.task('dev', ['js', 'sass', 'images']);
gulp.task('build', ['js', 'sass']);