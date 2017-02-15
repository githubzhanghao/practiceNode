var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    minifyCss = require("gulp-minify-css"),
    minifyHtml = require("gulp-minify-html");
 
gulp.task('minify-js', function () {
    gulp.src('js/*.js') // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dist/js')); //压缩后的路径
});

gulp.task('minify-css', function () {
    gulp.src('css/*.css') // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('dist/css'));
});
gulp.task('minify-html', function () {
    gulp.src('html/*.html') // 要压缩的html文件
    .pipe(minifyHtml()) //压缩
    .pipe(gulp.dest('dist/html'));
});