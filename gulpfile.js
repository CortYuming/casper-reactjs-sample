var gulp = require('gulp');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

gulp.task('npm-install', shell.task([
    'npm install'
]));
gulp.task('casperjs', shell.task([
    'node_modules/.bin/casperjs test e2e/'
]));
gulp.task('e2e-test', function(callback) {
    runSequence(
        'npm-install',
        'casperjs',
        callback
    );
});

