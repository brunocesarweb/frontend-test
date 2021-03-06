//https://github.com/JacksonGariety/gulp-nodemon
var gulp              = require('gulp');
var cssmin            = require('gulp-cssmin');
var sass              = require('gulp-sass');
var autoprefixer      = require('gulp-autoprefixer');
var uglify            = require('gulp-uglify');
var imagemin          = require('gulp-imagemin');
//var browserSync = require('browser-sync').create();

//Tasks
gulp.task('default', function() {
  gulp.start('sass','js','img');
});

gulp.task('sass', function() {
  return gulp.src('dev/assets/stylesheets/style.scss')
    //.pipe(sass().on('error', sass.logError))
    .pipe(sass())
    //rever autoprefixer
    // .pipe(autoprefixer({
    //   browsers: ['last 2 versions']
    // }))
    .pipe(cssmin())
    .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('js', function() {
    return gulp.src('dev/assets/javascripts/**/*.js')
	    .pipe(uglify())
	    .pipe(gulp.dest('public/assets/javascripts'));
});

gulp.task('img', function() {
  gulp.src('dev/assets/imagens/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/assets/imagens'));
});

gulp.task('watcher', ['default'], function() {

    gulp.watch('dev/assets/stylesheets/**/*.scss').on('change', function(event) {
        gulp.start('sass');
    });

    gulp.watch('dev/assets/javascripts/**/*.js').on('change', function(event) {
        gulp.start('js');
    });

    //gulp.watch('assets/**/*').on('change', browserSync.reload);

}); //server
