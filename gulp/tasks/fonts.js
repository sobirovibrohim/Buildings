module.exports = () =>
    $.gulp.task("fonts", () =>
        $.gulp.src($.path.src.fonts)
        .pipe($.glp.ttf2woff2())
        .pipe($.gulp.dest($.path.build.fonts))
        .on('end', $.bs.reload)
    )