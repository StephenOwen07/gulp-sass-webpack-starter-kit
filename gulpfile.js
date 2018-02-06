var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var webpack = require("webpack");
var imagemin = require("gulp-imagemin");
var imageminPngquant = require("imagemin-pngquant");
var imageminJpegRecompress = require("imagemin-jpeg-recompress");

// File paths
var srcHtml = "src/**/*.html";
var assetsScss = "src/assets/scss/**/*.scss";
var assetsScripts = "src/assets/scripts/**/*.js";
var assetsImages = "src/assets/images/**";
var tempCss = "src/temp/styles";
var distImages = "dist/assets/images";

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
gulp.task("scripts", function(callback) {
  webpack(require("./webpack.config.js"), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task("refreshScripts", ["scripts"], function() {
  browserSync.reload();
});

// Html
gulp.task("html", function() {
  browserSync.reload();
});

// Watch
gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
  gulp.watch(assetsScss, ["styles"]);
  gulp.watch(assetsScripts, ["refreshScripts"]);
  gulp.watch(srcHtml, ["html"]);
});

// images
gulp.task("optimizeImages", function() {
  return gulp
    .src(assetsImages)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({}),
        imagemin.svgo({ multipass: true }),
        imageminPngquant(),
        imageminJpegRecompress()
      ])
    )
    .pipe(gulp.dest(distImages));
});

// Build tasks

gulp.task("build", ["optimizeImages"]);
