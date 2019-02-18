
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function() {
  return gulp.src(
    [
    'node_modules/babel-polyfill/dist/polyfill.js',
    'js/*.js'
    ])
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch' , ['build'] , function(){
  gulp.watch('./src/app/*.js', ['build']);
})

gulp.task('default', ['build', 'watch']);