module.exports = () =>
    $.gulp.task("html", () =>
        $.gulp.src($.path.src.html)
        .pipe($.glp.plumber())
        .pipe($.glp.include())
        .pipe($.glp.pug({pretty: true}))
        .pipe($.gulp.dest($.path.build.html))
        .on('end', $.bs.reload)
    )