# Gulp Sass webpack starter kit

A front-end boilerplate with Gulp, Sass, webpack and Babel.

### This starter kit uses:

* Gulp
* webpack bundling
* Babel
* Sass & autoprefixer
* sourcemaps
* browser-sync
* cssnano, uglify, imagemin & usemin

## Getting started

### Prerequisites

* Install [NodeJS](https://nodejs.org/en/).
* Install gulp globally `npm install -g gulp`

### Installing

1. Download or clone this repo `https://githubcom/StephenOwen07/gulp-sass-webpack-starter-kit.git`
1. Run `npm install` from the root directory.
1. Run `gulp watch`
1. `gulp watch` will start browser-sync server and refresh your browser on save.
1. Additionally it will compile your SCSS files.
1. wepack will bundle your JavaScript and compile ES6.
1. SCSS and JS will be compiled to the temp folder.

## Deployment

1. Run `gulp build`
2. Build task will prepare your files for deployment in the dist folder
3. Build task will compress images, concat and minify styles and scripts.
4. Run `gulp previewDist` to launch browser-sync on the dist folder.

## Built with

* [Gulp](https://gulpjs.com)
* [webpack](https://webpack.js.org)
* [Sass](http://sass-lang.com)
* [Babel](https://babeljs.io)
