'use strict';

var path = require('path');
var gulp = require('gulp');
var changed = require('gulp-changed');
var newer = require('gulp-newer');
var gutil = require('gulp-util');
var coffee = require("gulp-coffee");

var paths = gulp.paths;

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

/* triggerd when coffee generates new file */
gulp.task('scripts', function () {
  return gulp.src(path.join(paths.src, '/app/**/*.js'))
    .pipe($.eslint())
    // .pipe($.eslint.format())
    .pipe($.size())
});

var COFFEE_SRC = '/app/**/*.coffee'
gulp.task('coffee-scripts', function () {
  return gulp.src(path.join(paths.src, COFFEE_SRC))
    .pipe(changed( COFFEE_SRC ))
    .pipe(newer(COFFEE_SRC))
  	.pipe(coffee({'bare': true}))
    .pipe(gulp.dest("src/app"));
});
