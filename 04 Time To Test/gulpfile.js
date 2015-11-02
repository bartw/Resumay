var gulp = require("gulp");
var rimraf = require("gulp-rimraf");
var less = require("gulp-less");
var minifyCss = require("gulp-minify-css");
var jshint = require("gulp-jshint");
var minify = require("gulp-minify");
var connect = require('gulp-connect');
var runSequence = require('run-sequence');

gulp.task("clean", function (done) {
    return gulp.src('./dist/**/*.*', { read: false })
        .pipe(rimraf({ force: true }));
});
gulp.task("less", function () {
    return gulp.src("./app/less/**/*.less")
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest("./dist/css"));
});
gulp.task("lint", function () {
    return gulp.src("./app/js/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default')); 
});
gulp.task("js", function () {
    return gulp.src("./app/js/**/*.js")
        .pipe(minify())
        .pipe(gulp.dest("./dist/js"));
});
gulp.task('components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task("html", function () {
    return gulp.src("./app/**/*.html")
        .pipe(gulp.dest("./dist"));
});
gulp.task("connect", function () {
    connect.server({
        root: "dist/",
        port: 8888
    });
});

gulp.task("watch", function() {
    gulp.watch("./app/js/**/*.js", ["lint", "js"]);
    gulp.watch("./app/less/**/*.less", ["less"]);
    gulp.watch("./app/bower_components/**", ["components"]);
    gulp.watch("./app/**/*.html", ["html"]);
});

gulp.task("build", function() {
    runSequence(
        ["clean"],
        ["lint", "less", "js", "components", "html"]
    );
});

gulp.task("default", ["build", "watch", "connect"]);