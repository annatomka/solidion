'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['build'], function () {
    gulp.watch([
        paths.src + '/*.html',
        paths.src + '/**/*.html',
        paths.src + '/**/*.less',
        paths.src + '/**/*.js',
        paths.src + '/images/*',
        'gulp/*.js',
        'bower.json'
    ], ['build']);
});
