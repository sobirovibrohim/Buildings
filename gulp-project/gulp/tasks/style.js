module.exports = () =>

    $.gulp.task("style", () =>
        $.gulp.src($.path.src.style)
        .pipe($.glp.sourcemaps.init())
        .pipe($.glp.plumber())
        .pipe($.sass())
        .pipe($.glp.autoprefixer({overrideBrowserslist:["last 4 version"]}))
        .pipe($.glp.rename({extname: ".css" }))
        .pipe($.glp.sourcemaps.write())
        .pipe($.gulp.dest($.path.build.style))
        .pipe($.sass({  outputStyle: "compressed"}))
        .pipe($.glp.rename({extname: ".min.css" }))
        .pipe($.gulp.dest($.path.build.style))
        .on('end', $.bs.reload)

    )