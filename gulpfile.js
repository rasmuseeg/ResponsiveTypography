/// <binding ProjectOpened='watch' />
'use strict';
require('es6-promise').polyfill();

var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require('gulp-autoprefixer');

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
    return gulp.src('src/sass/sass-sample.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('less', function () {
    return gulp.src('src/less/less-sample.less')
      .pipe(sourcemaps.init())
      .pipe(less().on('error', logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest('dist/css'));
});

gulp.task("watch-scss", function () {
    return gulp.watch("src/scss/**/*.scss", ["sass"]);
});
gulp.task("watch-less", function () {
    return gulp.watch("src/less/**/*.less", ["less"]);
});

gulp.task("default", ["sass", "less"]);

function logError(){

}