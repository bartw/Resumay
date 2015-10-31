var gulp = require("gulp");
var rimraf = require("gulp-rimraf");
var less = require("gulp-less");
var minifyCss = require("gulp-minify-css");
var eslint = require("gulp-eslint");
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
        .pipe(eslint())
        .pipe(eslint.format()); 
});
gulp.task("js", function () {
    return gulp.src("./app/js/**/*.js")
        .pipe(minify())
        .pipe(gulp.dest("./dist/js"));
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

gulp.task("build", function() {
    runSequence(
        ["clean"],
        ["lint", "less", "js", "html"]
    );
});
gulp.task("default", ["build", "connect"]);