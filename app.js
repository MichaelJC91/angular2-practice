var express = require('express'),
    app     = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// Requiring Routes
var indexRoute = require('./routes/index'),
    tasksRoute = require('./routes/tasks');

// Mongoose DataBase
mongoose.connect("mongodb://localhost:27017/angular2-practice");

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));

// View Engine
app.set("view engine", "ejs");

// Set static directory of stylesheets
app.use(express.static(__dirname + "/public"));

// Use Routes
app.use(indexRoute);


// Port for app to listen on
app.listen(3000, function() {
    console.log("App Started");
});
