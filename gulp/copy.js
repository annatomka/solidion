var gulp = require('gulp');

var assets = [
    gulp.paths.src+'/index.html'
];

var fonts = [
    gulp.paths.src+'/assets/fonts/*',
    'bower_components/font-awesome/fonts/*'
];

var images = [
    gulp.paths.src+'/assets/images/*'
];

gulp.task('copy', function(){
    gulp.src(assets)
        .pipe(gulp.dest(gulp.paths.dist));


    gulp.src(fonts)
        .pipe(gulp.dest(gulp.paths.dist+"/fonts"));

    gulp.src(images)
        .pipe(gulp.dest(gulp.paths.dist+"/images"));
});