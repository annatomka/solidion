var gulp = require('gulp');
gulp.task('build', ['copy','htmltojs','scripts','less','libstyles']);