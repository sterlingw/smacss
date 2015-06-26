var gulp   = require("gulp"),
    babel  = require("gulp-babel"),
    karma  = require('karma').server,
    rename = require("gulp-rename");



/**
 * Compile ES6 to ES5 with Babel.js
 */
gulp.task("babel", function () {
    return gulp.src("src/smacss.es6.js")
        .pipe(babel()) 
        .pipe(rename("smacss.js"))
        .pipe(gulp.dest("dist"));
});


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/test/run.js',
        singleRun: true
    }, done);
});


/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/test/run.js',
    }, done);
});