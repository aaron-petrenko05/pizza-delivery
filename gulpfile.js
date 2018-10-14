'use strict';
 
var gulp        = require('gulp');
var concat        = require('gulp-concat');
var merge        = require('merge-stream');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: "."
	});

	gulp.watch([
			   "assets/scss/*.scss"
			   ], ['sass']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
	return gulp.src([
			   		"assets/scss/*.scss"
				   ])
        .pipe(sourcemaps.init())
		.pipe(concat('assets/css/style.css')) 
		.pipe(plumber({
			handleError: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sass({outputStyle : 'compressed'}))
        .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest("./"))
		.pipe(browserSync.stream());
});



gulp.task('default', ['serve']);


var mysqlDump = require('mysqldump');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync');


gulp.task('connect', function() {
    connect.server();
});

gulp.task('connect-sync', function() {
  connect.server({}, function (){
    browserSync({
      proxy: '127.0.0.1:8000'
    });
  });
 
  gulp.watch('**/*.php').on('change', function () {
    browserSync.reload();
  });
});