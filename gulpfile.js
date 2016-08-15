'use strict'

const gulp = require('gulp')
const jade = require('gulp-jade')

gulp.task('jade', () => {
  return gulp.src('jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest(''))
})

gulp.task('watch', () => {
  gulp.watch('jade/**/*.jade', ['jade'])
})
