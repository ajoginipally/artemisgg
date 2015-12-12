var gulp = require('gulp'),
    del = require('del'),
    wiredep = require('wiredep').stream,
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename');

gulp.task('styles', function() {
  return sass('src/client/sass/main.scss', {style: 'expanded'})
    .pipe(gulp.dest('dist/public/css'))
    .pipe(rename({ suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/public/css'));
});

gulp.task('scripts', function() {
  return gulp.src(['src/client/js/**/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/public/js'))
    .pipe(rename({ suffix: '.min'}))
    .pipe(uglify())
    .on('error', function(e) {
      console.log(e);
    })
    .pipe(gulp.dest('dist/public/js'));
});

gulp.task('copy-lib', function() {
  return gulp.src('src/client/lib/**')
    .pipe(gulp.dest('dist/public/lib'));
});

gulp.task('copy-assets', function() {
  return gulp.src('src/client/lib/**')
    .pipe(gulp.dest('dist/public/lib'));
});

gulp.task('copy-assets2', function() {
  return gulp.src('src/client/lib/**')
    .pipe(gulp.dest('dist/public/lib'));
});

gulp.task('copy-views', function() {
  return gulp.src('src/client/assets/**')
    .pipe(gulp.dest('dist/public/assets'));
});

gulp.task('copy-server-src', function() {
  return gulp.src('src/server.js')
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-server', function() {
  return gulp.src('src/server/**')
    .pipe(gulp.dest('dist/server'));
});

gulp.task('copy-config', function() {
  return gulp.src('src/config/**')
    .pipe(gulp.dest('dist/config'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**/*', ['default']);
});

gulp.task('clean', function() {
  return del(['dist/public/**/*", "dist/server/**/*", "dist/config/**/*']);
});

gulp.task('bower', function() {
  gulp.src('src/server/views/index.ejs')
    .pipe(wiredep({
      ignorePath: "../../client/"
    }))
    .pipe(gulp.dest('src/server/views'));
});

gulp.task('default', ['clean'], function() {
  gulp.start('bower', 'scripts', 'bower', 'copy-lib', 'copy-assets', 'copy-assets2', 'copy-views', 'copy-server-src', 'copy-server', 'copy-config', 'styles');
});
