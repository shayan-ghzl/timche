'use strict';

const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const sass = gulpSass(dartSass);
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
// ----------------------------------------------

gulp.task('sass',async function () {
  return gulp.src([
      './assets/scss/category/category-style.scss',
      './assets/scss/change-password/change-password-style.scss',
      './assets/scss/user-manager-edit/user-manager-edit-style.scss',
      './assets/scss/digikala-add-comment/add-comment-style.scss',
      './assets/scss/admin-login/admin-login-style.scss',
      './assets/scss/category/layout-style.scss',
      './assets/scss/search/search-style.scss', 
      './assets/scss/login-register-mobile-page/login-register-mobile-page-style.scss',
      './assets/scss/basket-mobile-page/basket-mobile-page-style.scss',
      './assets/scss/style.scss',
      './assets/scss/academy-single/academy-single-style.scss',
      './assets/scss/academy/academy-style.scss',
      './assets/scss/academy/layout-academy-style.scss',
      './assets/scss/single/single-style.scss', 
      './assets/scss/user-manager/user-manager-style.scss', 
      './assets/scss/checkout/checkout-style.scss', 
      './assets/scss/academy-blog-post/academy-blog-post-style.scss',
      './assets/scss/academy-blog/academy-blog-style.scss',
      './assets/scss/contact-us/contact-style.scss',
      './assets/scss/about-us/about-style.scss',
      './assets/scss/user-manager-edit/kamadatepicker-complition.scss',
  ])
  .pipe(sass())
  .pipe(gulp.dest('./assets/css'))
});

gulp.task('autoprefixer',async function () {
  return gulp.src('./assets/css/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./assets/css/prefixed-style'))
});

gulp.task('minify-prefixer',async function () {
  return gulp.src('./assets/css/prefixed-style/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./assets/css/prefixed-style/min'))
});

gulp.task('minify-css', async function () {
  return gulp.src('./assets/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./assets/css/min'));
});

gulp.task('watch', async function () {
  gulp.watch('./assets/scss/**/*.scss', gulp.series(['sass', 'minify-css', 'autoprefixer', 'minify-prefixer']));
});

gulp.task('minify-svg', async function () {
  const { default: imagemin } = await import('gulp-imagemin');
  const { default: imageminSvgo } = await import('imagemin-svgo');
  gulp.src('./assets/img/svg-icon/*.svg')
    .pipe(imagemin([
      imageminSvgo()
    ]))
    .pipe(gulp.dest('./assets/gulp-imagemin/svg-icon'))
});

gulp.task('minify-image', async function () {
  const { default: imagemin } = await import('gulp-imagemin');
  gulp.src('./assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/gulp-imagemin'))
});

gulp.task('default', async function () {
  gulp.series(['sass', 'minify-css', 'autoprefixer', 'minify-prefixer', 'minify-svg', 'minify-image']);
});
