/**
  app.js

  This is the main point of entry for your app's scripts.
  Uno comes with Babel, so you can start using ES2015 features.

  It is recommended that you install "eslint" and "prettier" extensions
  in your favorite text editor to maintain code style and consistancy.

  You can add dependencies from npm:
    $ yarn add jquery

  Then, at the top of this file, import it:
    import $ from 'jquery'

  Now you can use $(). Import any module from npm, or import your own (try it below).
**/

// import $ from 'jquery';
// import { hello, log } from './components/example';
import hi from './components/hi';
import readMore from './components/read-more';
import morePhotos from './components/more-photos';
import lazyLoad from './components/lazyload';
function app() {

  hi();
  readMore();
  morePhotos();
  lazyLoad();







}

app();
