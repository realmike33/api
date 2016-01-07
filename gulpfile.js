var gulp = require("gulp");
var babel = require("gulp-babel");
var nodemon = require("gulp-nodemon");

gulp.task("build", function () {
  return gulp.src("./server/*.js")
  .pipe(babel({
      "presets": ["es2015"]
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task('start', function () {
  nodemon({
    script: './dist/index.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('run', ['build', 'start']);
