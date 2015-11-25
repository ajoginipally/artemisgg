# ArtemissGG website
ArtemisGG website

### Overview
We are creating a League of Legends application called Artemis, which enables one to extract data from previous matches about the enemy jungler. Allowing the user to find their most frequent jungle pathing and ganking routes. This will allow the user to watch out at specific times and prepare for high-danger time frames, avoiding a likely death. This application can also be used to look at professional junglers to see where and when they usually gank to help the new junglers if they are not sure where and when to gank.

## How to Run
### Build
'gulp'
### Run server
'npm start'

## Libraries
### Dependencies
1. ejs: javascript templating similar to handlebars
2. express: node framework
3. express-json: middleware to set content type to plain if accept header doesn't have json
4. mongoose: object modeling tool for node that allows schemas to be made to interact with mongo
5. serve-static: serve static middleware
6. wiredep: used in conjunction with gulp to automate concatination of bower dependencies to index

### DevDependencies
1. gulp: task runner to automate simple tasks
2. gulp del: used to clean project
3. gulp-concat: used to concatinate files
4. gulp-jshint: lints project
5. gulp-imagemin: minimizes images
6. gulp-livereload: allows for development with live reload of gulp whenver something is changed
7. gulp-minify-css: minifies style sheets
8. gulp-uglify: minifies scripts
9. gulp-rename: allows renaming of file after concatination of minfied files ie. adding suffix .min.js
10. gulp-ruby-sass: used in conjunction with stylesheet minification
11. all minified files get appended to dist folder

### BowerDependencies
1. angularJS: framework for client
2. angular-animate: module to allow animation
3. angular-touch: module for touch functionality
4. angular-ui-router: flexible routing with nested views. allows for a 'state' based application
5. bootstrap: css and js library will possibly use for grid system
6. jquery: bootstrap dependency

### Views
The user will have two primary views. First, the search view allows the user to input another user’s summoner name into the search to find information about that user. This leads to the second primary view where the user’s information about jungling is presented. Everything the user came to find will be shown in this view. There's an about page that will show information about the application. Currently there's a team view however this will be changed to show champions that are being used in the jungle recently. There's a log in view that will allow users to log in. Account utilization will be implemented later. Lastly, there is the admin view which will allow crud operations over users.

### Statefulness
Currently we are planning on what to do with user accounts who are not admins. However, admins are able to use crud operations on user accounts.

### Persistence
Most of the data will be pulled from the league api. We have an api which currently only works with the user model. This api will allow basic crud operations on the users. These options include getting a single user, getting all users, creating a user, and deleting a user.
