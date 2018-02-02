var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function(){
  gulp.src('*.scss')
    .pipe(sass())
    .pipe(rename('./style.css'))
    .pipe(gulp.dest('.'))
});

gulp.task('watch', function(){
  gulp.watch('*.scss', ['sass']); 
})
