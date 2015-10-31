# 02 Watch All The Things

## Setting things up

- Create a new folder "02 Watch All The Things"
- Copy the contents of "01 Getting Started" expect "node_modules"
- Install the missing modules
```shell
npm install
```

## Add html, less and js

- replace the index.html with some real html
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Resumay</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body id=>
	<h1>Resumay</h1>
	<p id="content" class="green">
		Resumay is built with Visual Studio Code.
	</p>
	<button id="colorButton">Switch color</button>
	<script src="js/app.js"></script>
</body>
</html>
```

- create style.less in app/less
```less
.red {
	color: red;
}
.green {
	color: green;
}
```

- create app.js in app/js
```javascript
document.getElementById("colorButton").addEventListener('click', function(e) {
    e.preventDefault();
    var classList = document.getElementById("content").classList; 
    if (classList.contains("red")) {
        classList.remove("red");
        classList.add("green");
    } else {
        classList.remove("green");
        classList.add("red");
    }
});
```

## Clean previous builds

- Install gulp-rimraf
```shell
npm install gulp-rimraf --save
```

- Add a tast to the gulpfile.js to clean the dist folder
```javascript
var rimraf = require("gulp-rimraf");
gulp.task("clean", function (done) {
    return gulp.src('./dist/**/*.*', { read: false })
        .pipe(rimraf({ force: true }));
});
```

## Compile, minify and copy LESS

- Install gulp-less
```shell
npm install gulp-less --save
```

- Install gulp-minify-css --save
```shell
npm install gulp-minify-css --save
```

- Add a task to the gulpfile.js to compile, minify and copy LESS
```javascript
var less = require("gulp-less");
var minifyCss = require("gulp-minify-css");
gulp.task("less", function () {
    return gulp.src("./app/less/**/*.less")
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest("./dist/css"));
});
```

## Lint, minify and copy javascript

- Install gulp-eslint
```shell
npm install gulp-eslint --save
```

- Install gulp-minify
```shell
npm install gulp-minify --save
```

- Add a task tot the gulpfile.js to lint the js
```javascript
gulp.task("lint", function () {
    return gulp.src("./app/js/**/*.js")
        .pipe(eslint())
        .pipe(eslint.format()); 
});
```

- Add a task to the gulpfile.js to minify and copy js
```javascript
var minify = require("gulp-minify");
gulp.task("js", function () {
    return gulp.src("./app/js/**/*.js")
        .pipe(minify())
        .pipe(gulp.dest("./dist/js"));
});
```

## Copy html

```javascript
gulp.task("html", function () {
    return gulp.src("./app/**/*.html")
        .pipe(gulp.dest("./dist"));
});
```

## Add watches for less, javascript and html
```javascript
gulp.task("watch", function() {
    gulp.watch("./app/js/**/*.js", ["lint", "js"]);
    gulp.watch("./app/less/**/*.less", ["less"]);
    gulp.watch("./app/**/*.html", ["html"]); 
});
```

## Combine everything

- Install run-sequence
```shell
npm install run-sequence --save
```

- Add a task to the gulpfile.js to build everything
```javascript
var runSequence = require('run-sequence');
gulp.task("build", function() {
    runSequence(
        ["clean"],
        ["lint", "less", "js", "html"]
    );
});
```

- Add a default task to the the gulpfile.js to build and start a server
```javascript
gulp.task("default", ["build", "watch", "connect"]);
```

## Try it
- Run "gulp" from the commandline
- Browse to <http://localhost:8888>
- Change something in html, less or js
- Refresh <http://localhost:8888> and see the changes