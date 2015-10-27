# Resumay

## Intro

Resumay is an ongoing project to learn all kinds of new things.
I will try to document as I go.

## Software

Install the needed software to get this party going.

- [Chocolatey](https://chocolatey.org/)
- Visual Studio Code: 
```shell
cinst visualstudiocode 
```
- [Node](https://nodejs.org)
- [Git](https://git.scm.com)

## Git

Create a repository on GitHub to save our project.

- Login to GitHub
- Create a new repository "Resumay"
- Initialize with a readme
- Add node .gitignore
- Create repository
- Copy https clone url
- Command prompt to projects folder
- Clone the repository
```shell
git clone https-clone-url
```

## Node

Install global node packages.

```shell
npm install -g bower gulp
```

## Setup basic project

Minimal setup of the Resumay project to start a server and show a Hello world.

- Open a command prompt to projects folder

- Create "package.json"

```shell
npm init
```

- Create "bower.json"

```shell
bower init
```

- Create ".bowerrc" with content:

```json
{
	"directory": "/app/bower_components"
}
```

- Install packages and save them in package.json

```shell
npm install bower gulp gulp-connect --save
```

- create file "gulpfile.js" with content:

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

- Create "app/index.html" with content:

```html
Hello world
```
- Start the connect task

```shell
gulp connect
```
- Browse to <http://localhost:8888>
