var gulp = require('gulp'),
	webpack = require('webpack-stream'),
	webpackConfig = require('./webpack.config.js'),
	path = require('path'),
	sourceFile = './start.jsx',
	destFolder = path.resolve(__dirname, 'appbuild');

//To minify remove comment of uglify() and commnet [devtool & debug mode]  , './src/**/*.scss'
gulp.task('webpack', function () {
	return gulp.src([sourceFile, './app/**/*.scss'])
	.pipe(webpack(webpackConfig))
	.pipe(gulp.dest(destFolder));
});

gulp.task('default', ['webpack']);