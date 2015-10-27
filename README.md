# Resumay

## Intro
Resumay is an ongoing project to learn all kinds of new things.
I will try to document as I go.

## Software
- [Chocolatey](https://chocolatey.org/)
- Visual Studio Code: 
```shell
cinst visualstudiocode 
```
- [Node](https://nodejs.org)
- [Git](https://git.scm.com)

## Git
- Login to GitHub
- Create a new repository "Resumay"
- Initialize with a readme
- Create repository
- Copy https clone url
- Command prompt to projects folder
- Clone the repository
```shell
git clone https-clone-url
```

## Node
```shell
npm install -g bower gulp
```

## Setup basic project
- Command prompt to projects folder
- 
```shell
npm init
```
- 
```shell
bower init
```
- create file ".bowerrc"
```json
{
	"directory": "/app/bower_components"
}
```
- 
```shell
npm install bower gulp gulp-connect --save
```
- create file "gulpfile.js"

```javascript
var gulp = require("gulp");
var connect = require('gulp-connect');

gulp.task('connect', function () {
	connect.server({
		root: 'app/',
		port: 8888
	});
});

```
- Create "app/index.html"
```html
Hello world
```
- 
```shell
gulp connect
```
- Browse to (http://localhost:8888)
