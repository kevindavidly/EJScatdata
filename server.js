// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
   response.render("index");
})
app.get('/cats', function(request, response) {
   response.render("cats");
})

app.get("/cuddles", function (request, response) {
    var cuddles = {name : "Cuddles", food: "spaghetti", age: 3, sleepingspots: ['under the bed', 'in a sunbeam']};
        response.render('details',{cat: cuddles});
})
app.get("/furball", function (request, response) {
    var furball = {name : "Furball", food: "toast", age: 9, sleepingspots: ['under the sand', 'at night']};
        response.render('details',{cat: furball});
})
app.get("/orange", function (request, response) {
    var orange = {name : "Orange", food: "oranges", age: 6, sleepingspots: ['under the tree', 'in a cave']};
        response.render('details',{cat: orange});
})
app.get("/candy", function (request, response) {
    var candy = {name : "Candy", food: "rolos", age: 4, sleepingspots: ['in the basement', 'in a well']};
        response.render('details',{cat: candy});
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
