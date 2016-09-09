var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');


gulp.task('jshint', function() {
  return gulp.src('./routes/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

// Default task
gulp.task('default', [], function() {
    gulp.start('jshint');
});