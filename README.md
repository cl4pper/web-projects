# laravel
Projects using Laravel framework - for studying purpose.
Technologies: Laravel(PHP) | Vue.js

Laravel documentation(version 5.6): https://laravel.com/docs/5.6

Artisan guide(Laravel's command-line interface): https://laravel.com/docs/5.6/artisan#introduction

Vue.js Guide: https://vuejs.org/v2/guide/

-------------- PROJECT COMMANDS GUIDE --------------

TO CREATE:
composer create-project --prefer-dist laravel/laravel PROJECT_NAME "LARAVEL_VERSION"

TO RUN PROJECT:
1. go inside the project folder
2. run -> php artisan serve
ps: localhost:8000 (default port to run the application)

TO ADD AUTH:
1. go inside the project folder
2. run -> php artisan make:auth

TO CREATE DATABASE TABLE:
1. go inside the project folder
2. run -> php artisan migrate

TO INSTALL NODE DEPENDENCIES:
1. go inside the project folder
2. run -> npm install
ps: to use javascript tools(ex. VueJs)

TO UPDATE CHANGES IN JS FILES:
1. go inside the project folder
2. run -> npm run dev OR npm run watch(will listen for file changes)

TO CREATE AND USE A NEW COMPONENT:
1. create a new .vue file (inside resources/assets/js/components)
2. declare that component in app.js file (resources/assets/js)
3. compile -> npm run dev
4. READY TO GO!

BINDING VARIABLES TO COMPONENTS: <tag v-bind:class="VAR_NAME">...</tag>
