var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minifyCss = require('gulp-minify-css');

gulp.task('css', function () {
    gulp.src('css/**/*.styl')
        .pipe(stylus())
        .pipe(minifyCss())
        .pipe(gulp.dest('assets'));
});

gulp.task('watch:css', ['css'], function () {
    gulp.watch('css/**/*.styl', ['css']);
});
