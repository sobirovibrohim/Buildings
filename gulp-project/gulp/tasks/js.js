const babel = require("gulp-babel");

module.exports = () =>
    $.gulp.task("js", () =>
        $.gulp.src($.path.src.js)
        .pipe($.glp.sourcemaps.init())
        .pipe($.glp.plumber())
        .pipe($.glp.fileInclude())
        .pipe($.glp.sourcemaps.write())
        .pipe($.gulp.dest($.path.build.js))
        .pipe($.glp.sourcemaps.init())
        .pipe($.glp.fileInclude())
        .pipe($.glp.babel({presets: ['@babel/env']}))
        .pipe($.glp.sourcemaps.write())
        .pipe($.glp.rename({extname: ".min.js"}))
        .pipe($.gulp.dest($.path.build.js))
        .on('end', $.bs.reload)

    )
    