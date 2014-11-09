var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function () {
    gulp.src(['ng/modules.js', 'ng/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('assets'));
});
