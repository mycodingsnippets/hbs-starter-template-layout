var gulp = require('gulp')
var handlebars = require('gulp-compile-handlebars')
var rename = require('gulp-rename')

gulp.task('default', function(){

    return gulp.src('./src/pages/*.hbs')
            .pipe(handlebars({}, {
                ignorePartials: true,
                batch: ['./src/partials']
            }))
            .pipe(rename({
                extname: '.html'
            }))
            .pipe(gulp.dest('./'))
})