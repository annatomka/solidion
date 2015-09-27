var gulp  = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var concat = require("gulp-concat");

var styles = [
    gulp.paths.src+'/less/main.less'
];

var lib_styles = [
    'bower_components/animate.css/animate.css'
];

gulp.task('less', function () {
    gulp.src(styles)
        .pipe(sourcemaps.init())
        .pipe(less({}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(gulp.paths.dist+'/public/css'));
});


gulp.task('libstyles', function() {
    gulp.src(lib_styles)
        .pipe(sourcemaps.init())
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(concat('lib.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(gulp.paths.dist+'/public/css'))
});