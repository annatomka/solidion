var gulp = require('gulp');
gulp.paths = {
  src: 'src',
  dist: 'dist'
};
require('require-dir')('./gulp');
gulp.task('default', ['build']);
