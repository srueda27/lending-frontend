const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const del = require('del');

sass.compiler = require('node-sass');

gulp.task('prefixer', () => {
    return gulp.src('src/index.css')
        .pipe(autoprefixer({
            cascade: false
        }).on('error', sass.logError))
        .pipe(gulp.dest('./src/prefixers'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('default', gulp.series(['clean']));