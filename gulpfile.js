var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

// File paths
var assetsScss = "src/assets/scss/**/*.scss";

var tempCss = "src/temp/styles";
// Styles
gulp.task("styles", function() {
  return gulp
    .src(assetsScss)
    .pipe(sass())
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest(tempCss));
});

gulp.task("scripts", function() {});

gulp.task("html", function() {});
