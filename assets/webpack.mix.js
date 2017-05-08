const { mix } = require('laravel-mix');


mix.js('resources/assets/js/app.js', 'js')
  .sass('resources/assets/sass/main.scss', 'css')
  .setResourceRoot('/project/assets/');