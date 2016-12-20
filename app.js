var express = require('express'),
    app     = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//Root Route
app.get('/', function(req, res) {
    res.send('Hello!');
});

app.listen(3000, function() {
    console.log("App Started");
});
