# web-projects
Web app projects.
Technologies: Laravel(PHP) | Vue.js

Laravel documentation(version 5.6): https://laravel.com/docs/5.6

Artisan guide(Laravel's command-line interface): https://laravel.com/docs/5.6/artisan#introduction

Vue.js Guide: https://vuejs.org/v2/guide/

-------------- PROJECT COMMANDS GUIDE --------------

TO CREATE:
LARAVEL: composer create-project --prefer-dist laravel/laravel PROJECT_NAME "LARAVEL_VERSION"
VUE.JS: vue init webpack PROJECT_NAME

TO RUN PROJECT: (LARAVEL)
1. go inside the project folder
2. run -> php artisan serve
ps: localhost:8000 (default port to run the application)

TO RUN PROJECT: (VUE.JS)
1. go inside the project folder
2. npm install (first time)
3. npm run dev

TO CHANGE PORT(Vue.js):
1. config/index.js -> port

TO INSTALL NODE DEPENDENCIES:
1. go inside the project folder
2. run -> npm install
ps: to use javascript tools(ex. Vue.js)

TO UPDATE CHANGES IN JS FILES:
1. go inside the project folder
2. run -> npm run dev OR npm run watch(will listen for file changes)

TO CREATE AND USE A NEW COMPONENT:
1. create a new .vue file (inside resources/assets/js/components)
2. declare that component in app.js file (resources/assets/js)
3. compile -> npm run dev
4. READY TO GO!