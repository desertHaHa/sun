var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
gulp.task('changeJs',function(){
    gulp.src(['./script1.js','./script2.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./dest/'));
})
gulp.task('hebin',function(){
    gulp.src(['./dest/script2.js','./dest/script1.js'])
        .pipe(concat(['./dest/script2.js','./dest/script1.js']))
        .pipe(gulp.dest('./dest'));
})