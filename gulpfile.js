var rootSrc      = "./templates/",
    usrSrc       = "./user/templates/";
var gulp         = require("gulp"),
    render       = require("gulp-nunjucks-render"),
    nunjuckFiles = {
        root: [
            rootSrc + "base/",
            rootSrc + "partials/"
        ],
        user: [
            usrSrc + "base/",
            usrSrc + "partials/"
        ]
    },
    pages        = {
        root: [
            rootSrc + "pages/**/*.*"
        ],
        user : [
            usrSrc + "pages/**/*.*"
        ]
    };

gulp.task("render-root", function () {
    return gulp.src(pages.root)
        .pipe(render({
            path: nunjuckFiles.root
        }))
        .pipe(gulp.dest("./"));
});

gulp.task("render-user", function () {
    return gulp.src(pages.user)
        .pipe(render({
            path: nunjuckFiles.user
        }))
        .pipe(gulp.dest("./user/"));
});