const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('js', function() {
  gulp.src(['./js/app.js', './js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
  gulp.src([ 
    './reset.css', 
    './styles/**/*.css',
    './styles/**/*.scss'
    ])
  .pipe(sass())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['js', 'css', 'watch']);

gulp.task('watch', function(){
  return gulp.watch(['./index.html', './js/**/*.js', './styles/**/*.css', './styles/**/*.scss'], ['js', 'css']);
})
