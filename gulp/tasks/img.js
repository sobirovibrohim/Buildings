module.exports = () =>
    $.gulp.task("img", () =>
        $.gulp.src($.path.src.img)
        .pipe($.glp.webp())
        .pipe($.gulp.dest($.path.build.img))
        .on('end', $.bs.reload)
    )