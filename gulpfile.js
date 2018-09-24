//Dependencias

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

//Configura la tarea demo.
gulp.task('demo', function() {
    gulp.src('js/source/*.js')
    .pipe(concat('todo.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/build/'))
});