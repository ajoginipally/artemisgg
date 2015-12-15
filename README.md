# ArtemissGG website
ArtemisGG website

### Overview
We are creating a League of Legends application called Artemis, which enables one to extract data from previous matches about the enemy jungler. Allowing the user to find their most frequent jungle pathing and ganking routes. This will allow the user to watch out at specific times and prepare for high-danger time frames, avoiding a likely death. This application can also be used to look at professional junglers to see where and when they usually gank to help the new junglers if they are not sure where and when to gank.

## How to Run
### Build
'gulp'
### Run server
'npm start'
### Misc
'Make sure to have Sass installed and any other Dependencies the console says are missing'

## Libraries
### Dependencies
1. ejs: javascript templating similar to handlebars  https://github.com/tj/ejs
2. express: node framework http://expressjs.com/en/index.html
3. express-json: middleware to set content type to plain if accept header doesn't have json https://www.npmjs.com/package/express-json
4. mongoose: object modeling tool for node that allows schemas to be made to interact with mongo http://mongoosejs.com/
5. serve-static: serve static middleware https://github.com/expressjs/serve-static
6. wiredep: used in conjunction with gulp to automate concatination of bower dependencies to index https://github.com/taptapship/wiredep
7. passport: used for authentication http://passportjs.org/
8. passport-local and passport-local-mongoose are used in conjunction with passport and mongoose https://github.com/jaredhanson/passport-local https://github.com/saintedlama/passport-local-mongoose
9. express-session is used to maintain user sessions https://github.com/expressjs/session
10. morgan is used to log statuses https://github.com/expressjs/morgan
11. cookie parser is used by express to parse any cookies that come through https://github.com/expressjs/cookie-parser
12. body parser is used to parse json https://github.com/expressjs/body-parser
13. connect flash is used to display flash messages https://github.com/jaredhanson/connect-flash
 
### DevDependencies
1. gulp: task runner to automate simple tasks http://gulpjs.com/
2. gulp del: used to clean project https://www.npmjs.com/package/del
3. gulp-concat: used to concatinate files https://github.com/contra/gulp-concat
4. gulp-jshint: lints project https://www.npmjs.com/package/gulp-jshint
5. gulp-imagemin: minimizes images https://www.npmjs.com/package/gulp-imagemin
6. gulp-livereload: allows for development with live reload of gulp whenver something is changed https://www.npmjs.com/package/gulp-livereload
7. gulp-minify-css: minifies style sheets https://www.npmjs.com/package/gulp-minify-css
8. gulp-uglify: minifies scripts https://www.npmjs.com/package/gulp-uglify
9. gulp-rename: allows renaming of file after concatination of minfied files ie. adding suffix .min.js https://www.npmjs.com/package/gulp-rename
10. gulp-ruby-sass: used in conjunction with stylesheet minification https://github.com/sindresorhus/gulp-ruby-sass
11. all minified files get appended to dist folder

### BowerDependencies
1. angularJS: framework for client https://angularjs.org/
2. angular-animate: module to allow animation
3. angular-touch: module for touch functionality
4. angular-ui-router: flexible routing with nested views. allows for a 'state' based application
5. bootstrap: css and js library will possibly use for grid system http://getbootstrap.com/
6. jquery: bootstrap dependency https://jquery.com/
7. restangular is used to handle rest api's more efficiently https://github.com/mgonto/restangular
8. angular cookies is used to capture cookies sent from the server
9. angular filter is used to expose more filtering options for ng-repeat https://github.com/a8m/angular-filter

### Views
1. Main View: Here the user can look up summoners and find information about their last jungle games and gank percentage
2. Login View: Here a user can log in
3. Register View: Here a user can register
4. User View: Displays a list of users only allowed for admins
5. About View: Here there's information about the application

### Statefulness
Cookies are sent to enable statefulness. There is nothing a non admin user can do currently. However, if you are an admin you can go to the user page to see a list of users registered.

### Persistence
Most of the data will be pulled from the league api. We have an api which currently only works with the user model. We have an api to enable logging in and registering. This api also allows retrieval of all the users in the database.
