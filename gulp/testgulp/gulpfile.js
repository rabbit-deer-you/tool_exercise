var gulp = require('gulp');
 	useref = require('gulp-useref'),
 	gulpif = require("gulp-if"),
 	uglify = require("gulp-uglify"),
 	minifyCss = require('gulp-clean-css'),
 	htmlmin = require('gulp-htmlmin'),
 	runSequence = require('run-sequence'),
 	rev = require('gulp-rev'),
 	revCollector = require('gulp-rev-collector'),
 	clean = require("gulp-clean");

var config = {
	src:"app",
	dist:"dist"
};

gulp.task("cleanDist",function(){
	return gulp.src(config.dist)
		.pipe(clean());
});

gulp.task("revCss",function(){
	return gulp.src(config.dist+"/css/*.css")
		.pipe(clean())
		.pipe(rev())
		.pipe(gulp.dest(config.dist+'/css'))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.dist+'/css'));
});

gulp.task("revJs",function(){
	return gulp.src(config.dist+"/js/*.js")
		.pipe(clean())
		.pipe(rev())
		.pipe(gulp.dest(config.dist+'/js'))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.dist+'/js'));
});

gulp.task("revHtml",function(){
	return gulp.src([config.dist+'/**/*.json',config.dist+'/*.html'])
		.pipe(revCollector())
		.pipe(gulp.dest(config.dist));
});	

gulp.task("useref",function(){
	return gulp.src(config.src+"/*.html")
			.pipe(useref())
			.pipe(gulpif('*.js',uglify()))
			.pipe(gulpif('*.css',minifyCss()))
			.pipe(gulp.dest(config.dist));
});

gulp.task("minifyHtml",function(){
	return gulp.src(config.dist+"/*.html")
		.pipe(htmlmin({
			removeComments:true, //清除HTML注释
			collapseWhitespace:true,//压缩HTML
			removeEmptyAttributes:true //删除所有空格作属性的值
		}))
		.pipe(gulp.dest(config.dist));
});

gulp.task('build',function(){
	runSequence('cleanDist','useref',['revCss','revJs'],'revHtml','minifyHtml');
});