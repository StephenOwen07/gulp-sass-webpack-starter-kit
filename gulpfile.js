var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var webpack = require("webpack");

// File paths
var srcHtml = "src/**/*.html";
var assetsScss = "src/assets/scss/**/*.scss";
var assetsScripts = "src/assets/scripts/**/*.js";
var tempCss = "src/temp/styles";

// Styles
gulp.task("styles", function() {
  return gulp
    .src(assetsScss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(autoprefixer("last 2 versions"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(tempCss))
    .pipe(browserSync.stream());
});

// Scripts
gulp.task("scripts", ["webpack"], function() {
  browserSync.reload();
});

gulp.task("webpack", function(callback) {
  webpack(require("./webpack.config.js"), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task("html", function() {});

// Watch
gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
  gulp.watch(assetsScss, ["styles"]);
  gulp.watch(assetsScripts, ["scripts"]);
  gulp.watch(srcHtml, function() {
    browserSync.reload();
  });
});
