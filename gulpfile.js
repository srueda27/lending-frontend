const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('prefixer', () => {
    return gulp.src('src/styles/*.css')
        .pipe(autoprefixer({
            cascade: false
        }).on('error', sass.logError))
        .pipe(gulp.dest('./src/prefixers'));
});