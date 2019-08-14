const { dest, src, watch, series } = require("gulp");
const sass = require("gulp-sass");
const minify = require("gulp-minify");
const image = require("gulp-image");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
function copyHtml() {
	return src("src/*.html")
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest("dist"));
}
function imageCompression() {
	return src("src/images/**")
		.pipe(image())
		.pipe(dest("./dist/images"));
}
function scss() {
	return src("src/css/main.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(dest("dist/css"));
}
function combineScripts() {
	return src(["src/js/**/*.js"])
		.pipe(concat("main.js"))
		.pipe(minify())
		.pipe(dest("dist/js"));
}

exports.imgs = imageCompression;
exports.css = scss;
exports.build = series(scss, copyHtml, imageCompression, combineScripts);
exports.default = function() {
	watch(["src/css/**/*.scss", "src/css/sections/**/*.scss"], scss);
	watch("src/js/*.js", combineScripts);
	watch("src/*.html", copyHtml);
	watch("src/images/*", imageCompression);
};
