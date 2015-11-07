# 04 Time To Test

## Setting things up

- Create a new folder "04 Time To Test"
- Copy the contents of "03 Angular" except "node_modules", "dist" and "app/bower_components"
- Install the missing modules
```shell
npm install
bower install
```

## Install everything needed for testing

- Install [Python 2](http://www.python.org/getit/windows/) 

- Install packages

```shell
npm install -g node-gyp
npm install -g karma
npm install gulp-jasmine --save
npm install karma-jasmine --save
npm install karma-phantomjs-launcher --save
npm install karma-spec-reporter --save
```

## Setup

- Configure karma
```shell
karma init
```

- Add tasks

```javascript
var karma = require('gulp-karma');

gulp.task('test', function() {
  // Be sure to return the stream
  // NOTE: Using the fake './foobar' so as to run the files
  // listed in karma.conf.js INSTEAD of what was passed to gulp.src !
  return gulp.src('./foobar')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      console.log(err);
      this.emit('end'); //instead of erroring the stream, end it
    });
});

gulp.task('autotest', function() {
  return gulp.watch(['www/js/**/*.js', 'test/spec/*.js'], ['test']);
});
```