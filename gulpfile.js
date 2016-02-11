var src          = "./templates/";
var gulp         = require("gulp"),
    render       = require("gulp-nunjucks-render"),
    nunjuckFiles = [
        src + "base/",
        src + "partials/"
    ],
    pages        = [
        src + "pages/**/*.*"
    ];

gulp.task("render", function () {
    render.nunjucks.configure(nunjuckFiles, {watch: false});

    return gulp.src(pages)
        .pipe(render({
            path: nunjuckFiles
        }))
        .pipe(gulp.dest("./"));
});