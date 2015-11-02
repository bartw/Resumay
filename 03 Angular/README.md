# 03 Angular

## Setting things up

- Create a new folder "03 Angular"
- Copy the contents of "02 Watch All The Things" except "node_modules" and "dist"
- Install the missing modules
```shell
npm install
```

## Install and copy Angular

- Update "bower.json"
```json
"ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ]
```
to
```json
"ignore": [
    "**/.*",
    "node_modules",
    "app/bower_components",
    "test",
    "tests"
  ]
```

- Install Angular using Bower
```shell
bower install angular --save
```

- Add a task to copy bower components and add the task to the watch and build tasks
```javascript
gulp.task('components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
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
```

## Use Angular

- Update index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Resumay</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body ng-app="Resumay">
	<div ng-controller="MyFirstController">
		<h1>Resumay</h1>
		<p id="content" class="{{color}}">
			Resumay is built with Visual Studio Code, Node, Bower, Gulp and Angular.
		</p>
		<button ng-click="switchColor()">Switch color</button>
	</div>
	<script src="bower_components/angular/angular.js"></script>
	<script src="js/app.js"></script>
</body>
</html>
```

- Update app.js
```javascript
var app = angular.module("Resumay", []);

app.controller("MyFirstController", function($scope) {
  $scope.color = "green";

  $scope.switchColor = function() {
      if ($scope.color === "green") {
          $scope.color = "red";
      } else {
          $scope.color = "green";
      }
  };
});
```