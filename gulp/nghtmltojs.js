var ngHtml2Js = require("gulp-ng-html2js");
var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task('htmltojs', function () {
    return gulp.src(gulp.paths.src+"/app/**/*.tpl.html")
        .pipe(ngHtml2Js({
            moduleName: "templates"
        }))
        .pipe(concat("templates.js"))
        .pipe(gulp.dest(gulp.paths.dist+"/templates/"));
});

