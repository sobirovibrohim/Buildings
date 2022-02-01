global.$ = {
    gulp: require("gulp"),
    glp: require("gulp-load-plugins")(),
    bs: require("browser-sync").create(),
    sass:require("gulp-sass")(require("sass")),

    path: {
        serverDir: "./app/build",
        tasks:require("./gulp/config"),
        src: {
            html: "./app/src/index.*",
            style: "./app/src/style/*.*",
            js:"./app/src/js/*.js",
            img: "./app/src/img/*.{jpg,png,svg,jpeg,gfif,webp}",
            fonts:"./app/src/fonts/**/*.*"

        },

        build: {
            html: "./app/build/",
            style: "./app/build/style",
            js: "./app/build/js/",
            img: "./app/build/img/",
            fonts:"./app/build/fonts/"
        },
        watch: {
            html: ["./app/src/index.*", "./app/src/view/*.*"],
            style: "./app/src/style/**/*.*",
            js: "./app/src/js/*.js",
            img:"./app/src/img/*.{jpg,png,svg,jpeg,gfif,webp}",
            fonts:"./app/src/fonts/**/*.*"
        }

    },


}

$.path.tasks.forEach(path => require(path)());

$.gulp.task("default", $.gulp.series($.gulp.parallel("html", "style", "js", 'img', "fonts", "serve", "watch" )))