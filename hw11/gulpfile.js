const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

function html() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
}

function scss() {
    return gulp.src('src/*.scss')
        .pipe(sass({ collapseWhitespace: true }))
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('dist'));
}

function browserSyncReload(){
    browserSync.init({
        server: {
            baseDir: "./dist/"
        },
        browser: 'chrome'
    });
    gulp.watch('./src/*.html', html);
    gulp.watch('./src/*.scss', scss);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
    gulp.watch("./src/*.scss").on('change', browserSync.reload);
}

gulp.task('html', html);
gulp.task('scss', scss);
gulp.task('browserSyncReload', browserSyncReload);

gulp.task('default', gulp.series(gulp.parallel(html, scss)));
gulp.task('watch', gulp.series('default', 'browserSyncReload'));
