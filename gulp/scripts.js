var gulp = require('gulp');
var concat = require("gulp-concat");
var sourcemaps = require('gulp-sourcemaps');

var scripts = [
    "bower_components/angular/angular.js",
    "bower_components/angular-ui-router/release/angular-ui-router.js",
    "bower_components/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js",
    "bower_components/angular-bootstrap/ui-bootstrap.js",
    "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
    "bower_components/angular-animate/angular-animate.js",
    "bower_components/jquery/dist/jquery.js",
    "bower_components/scroll-animate-directive/src/scroll-animate-directive.js",

    gulp.paths.src+'/**/*.js',

    // NO TESTS
    "!"+gulp.paths.src+'/**/*spec.js',
];

gulp.task('scripts', function() {
    gulp.src(scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(gulp.paths.dist+'/scripts/'))
});