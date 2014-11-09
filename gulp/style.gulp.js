var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minifyCss = require('gulp-minify-css');

gulp.task('style', function () {
    gulp.src('style/**/*.styl')
        .pipe(stylus())
        .pipe(minifyCss())
        .pipe(gulp.dest('assets'));
});

gulp.task('watch:style', ['style'], function () {
    gulp.watch('style/**/*.styl', ['style']);
});
