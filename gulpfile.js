var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('run-tests', function() {
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({
      ui: 'bdd'
    }));
});

gulp.task('watch-test', function() {
  gulp.watch(['greet.js', 'test/**'], ['run-tests']);
});

gulp.task('default', ['run-tests']);
gulp.task('test', ['run-tests', 'watch-test']);
