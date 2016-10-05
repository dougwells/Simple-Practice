var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', ['modernizr'], function(callback) {
  // going up one folder placing us in gulp folder and then up another folder to get to root of project.
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if(err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
